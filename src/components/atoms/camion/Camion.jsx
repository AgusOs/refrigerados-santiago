import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import './Camion.css';
import { textos as checkpointTexts } from './Textos';

const Camion = () => {
  const [progress, setProgress] = useState(0);
  
  // MotionValue para el progreso (0 a 100)
  const progressValue = useMotionValue(progress);
  
  // Actualizar el motionValue cuando cambia el slider
  React.useEffect(() => {
    progressValue.set(progress);
  }, [progress, progressValue]);

  // Convertir progreso de 0-100 a 0-1
  const normalizedProgress = useTransform(progressValue, [0, 100], [0, 1]);

  // Checkpoints del recorrido
  const checkpoints = [0, 26.5, 53.4, 80, 100];

  // Obtener checkpoint actual
  const getCurrentCheckpoint = () => {
    return checkpoints.findIndex(checkpoint => Math.abs(progress - checkpoint) < 10);
  };

  // Funciones para navegar entre checkpoints con animación
  const goToNextCheckpoint = () => {
    const currentIndex = getCurrentCheckpoint();
    if (currentIndex < checkpoints.length - 1) {
      animateToCheckpoint(checkpoints[currentIndex + 1]);
    }
  };

  const goToPreviousCheckpoint = () => {
    const currentIndex = getCurrentCheckpoint();
    if (currentIndex > 0) {
      animateToCheckpoint(checkpoints[currentIndex - 1]);
    }
  };

  // Función para animar suavemente hacia un checkpoint
  const animateToCheckpoint = (targetProgress) => {
    const startProgress = progress;
    const duration = 1500; // 1.5 segundos
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);
      
      // Usar easing suave (ease-out)
      const easedProgress = 1 - Math.pow(1 - progressRatio, 3);
      const newProgress = startProgress + (targetProgress - startProgress) * easedProgress;
      
      setProgress(newProgress);
      
      if (progressRatio < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  };

  // Función para calcular puntos exactos sobre la curva SVG + línea recta
  const calculatePointOnCurve = (t) => {
    // La curva termina en t=0.8, después va recto
    if (t <= 0.8) {
      // Ajustar t para que la curva use solo el 80% del progreso
      const curveT = t / 0.8;
      
      if (curveT <= 0.333) {
        // Primera curva: 60,250 → 140,120 → 280,220
        const localT = curveT / 0.333;
        const x = (1 - localT) * (1 - localT) * 60 + 2 * (1 - localT) * localT * 140 + localT * localT * 280;
        const y = (1 - localT) * (1 - localT) * 250 + 2 * (1 - localT) * localT * 120 + localT * localT * 220;
        return { x: (x / 1200) * 100, y: (y / 320) * 100 };
      } else if (curveT <= 0.666) {
        // Segunda curva: 280,220 → 420,120 → 560,220
        const localT = (curveT - 0.333) / 0.333;
        const x = (1 - localT) * (1 - localT) * 280 + 2 * (1 - localT) * localT * 420 + localT * localT * 560;
        const y = (1 - localT) * (1 - localT) * 220 + 2 * (1 - localT) * localT * 120 + localT * localT * 220;
        return { x: (x / 1200) * 100, y: (y / 320) * 100 };
      } else {
        // Tercera curva: 560,220 → 700,120 → 840,250
        const localT = (curveT - 0.666) / 0.334;
        const x = (1 - localT) * (1 - localT) * 560 + 2 * (1 - localT) * localT * 700 + localT * localT * 840;
        const y = (1 - localT) * (1 - localT) * 220 + 2 * (1 - localT) * localT * 120 + localT * localT * 250;
        return { x: (x / 1200) * 100, y: (y / 320) * 100 };
      }
    } else {
      // Línea recta después de la curva (t > 0.8)
      const straightT = (t - 0.8) / 0.2; // Los últimos 20% son línea recta
      const startX = (840 / 1200) * 100; // Punto donde termina la curva
      const startY = (250 / 320) * 100;
      const endX = (1100 / 1200) * 100;  // Punto final (más a la derecha)
      const endY = startY;               // Misma altura (línea recta horizontal)
      
      const x = startX + (endX - startX) * straightT;
      const y = startY + (endY - startY) * straightT;
      
      return { x, y };
    }
  };

  // Calcular rotación del camión basada en la tangente de la curva
  const calculateTruckRotation = (t) => {
    if (t >= 0.8) {
      // En la línea recta, el camión va horizontal (0 grados)
      return 0;
    }
    
    const current = calculatePointOnCurve(t);
    const next = calculatePointOnCurve(Math.min(t + 0.01, 0.8)); // No pasar de 0.8 para la curva
    return Math.atan2(next.y - current.y, next.x - current.x) * (90 / Math.PI);
  };

  // Posición del camión siguiendo la curva
  const truckX = useTransform(
    normalizedProgress,
    (t) => `${calculatePointOnCurve(t).x}%`
  );
  
  const truckY = useTransform(
    normalizedProgress,
    (t) => `${calculatePointOnCurve(t).y}%`
  );

  // Rotación del camión según la curva
  const truckRotation = useTransform(
    normalizedProgress,
    (t) => calculateTruckRotation(t)
  );

  // Función para animar automáticamente
  const autoAnimate = () => {
    const duration = 4000; // 4 segundos
    const startTime = Date.now();
    const startProgress = progress;
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);
      const newProgress = startProgress + (100 - startProgress) * progressRatio;
      
      setProgress(newProgress);
      
      if (progressRatio < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  };

  const resetAnimation = () => {
    setProgress(0);
  };

  return (
    <div className="truck-container">
      <div className="truck-wrapper">
        {/* Contenedor principal de la animación */}
        <div className="truck-canvas" style={{ position: 'relative', overflow: 'hidden' }}>
          
          {/* Fondo fijo (carretera y paisaje) */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              zIndex: 1
            }}
          >
            {/* SVG de la carretera fijo */}
            <svg 
              style={{ 
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: '0',
                top: '0'
              }}
              viewBox="0 0 1200 320"
            >
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#e5e7eb" />
                  <stop offset="100%" stopColor="#9ca3af" />
                </linearGradient>
              </defs>
              
              {/* Carretera base con extensión recta */}
              <path
                d="M 60 250 Q 140 120, 280 220 Q 420 120, 560 220 Q 700 120, 840 250 L 1100 250"
                stroke="url(#pathGradient)"
                strokeWidth="50"
                fill="none"
                strokeLinecap="round"
                opacity="0.8"
              />

              {/* Línea blanca que se va dibujando */}
              <motion.path
                d="M 60 250 Q 140 120, 280 220 Q 420 120, 560 220 Q 700 120, 840 250 L 1100 250"
                stroke="white"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="22"
                style={{ 
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                }}
              />

              {/* Checkpoints en la carretera (incluyendo el tramo recto) */}
              {[0, 0.265, 0.534, 0.8, 1].map((t, index) => {
                const point = calculatePointOnCurve(t);
                const checkpointProgress = t * 100;
                return (
                  <g key={`road-checkpoint-${index}`}>
                    <circle
                      cx={(point.x / 100) * 1200}
                      cy={(point.y / 100) * 320}
                      r="12"
                      fill={progress >= checkpointProgress ? "#10b981" : "#6b7280"}
                      stroke="white"
                      strokeWidth="3"
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Camión que se mueve por la curva */}
          <motion.div
            style={{
              position: 'absolute',
              left: useTransform(truckX, (x) => `calc(${x} - 2.5%)`),
              top: useTransform(truckY, (y) => `calc(${y} - 9%)`),
              transform: 'translate(-50%, -50%)',
              rotate: truckRotation,
              zIndex: 20,
              width: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img 
                src="/assets/distribuidora/icono-camion.png" 
                alt="Camión" 
                style={{
                  width: '55px', 
                  height: '55px',
                  filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4))',
                  backgroundColor: 'rgba(45, 71, 216, 1)',
                  borderRadius: '50%'
                }} 
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Sección de información del checkpoint actual */}
        <div style={{ 
          backgroundColor: '#f8fafc', 
          padding: '20px', 
          borderRadius: '12px', 
          marginBottom: '20px',
          border: '1px solid #e2e8f0'
        }}>
          <h3 style={{ 
            margin: '0 0 10px 0', 
            color: '#2d3748', 
            fontSize: '1.2rem',
            fontWeight: 'bold' 
          }}>
            {checkpointTexts[getCurrentCheckpoint()]?.title || "En tránsito"}
          </h3>
          <p style={{ 
            margin: '0', 
            color: '#4a5568', 
            fontSize: '1rem',
            lineHeight: '1.5' 
          }}>
            {checkpointTexts[getCurrentCheckpoint()]?.description || "Movimiento entre paradas"}
          </p>
        </div>

        {/* Controles */}
        <div className="truck-controls">
          {/* Botones de navegación entre checkpoints */}
          <div style={{ 
            display: 'flex', 
            gap: '10px', 
            justifyContent: 'center', 
            marginBottom: '20px' 
          }}>
            <button
              onClick={goToPreviousCheckpoint}
              disabled={getCurrentCheckpoint() <= 0}
              style={{
                backgroundColor: getCurrentCheckpoint() <= 0 ? '#9ca3af' : '#ef4444',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: getCurrentCheckpoint() <= 0 ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.3s'
              }}
            >
              ←
            </button>
            <button
              onClick={goToNextCheckpoint}
              disabled={getCurrentCheckpoint() >= checkpoints.length - 1}
              style={{
                backgroundColor: getCurrentCheckpoint() >= checkpoints.length - 1 ? '#9ca3af' : '#10b981',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: getCurrentCheckpoint() >= checkpoints.length - 1 ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.3s'
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Camion;