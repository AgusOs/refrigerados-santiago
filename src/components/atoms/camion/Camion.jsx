import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import './Camion.css';

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

  // Puntos de la curva ondulada
  const pathPoints = [
    { x: 6, y: 80 },   // inicio
    { x: 14, y: 40 },  // primera subida
    { x: 28, y: 70 },  // bajada
    { x: 42, y: 40 },  // segunda subida
    { x: 56, y: 70 },  // bajada
    { x: 70, y: 40 },  // tercera subida
    { x: 84, y: 80 }   // final
  ];

  // Transformar progreso a posiciones del camión
  const truckX = useTransform(
    normalizedProgress,
    [0, 0.167, 0.333, 0.5, 0.667, 0.833, 1],
    pathPoints.map(p => `${p.x}%`)
  );
  
  const truckY = useTransform(
    normalizedProgress,
    [0, 0.167, 0.333, 0.5, 0.667, 0.833, 1],
    pathPoints.map(p => `${p.y}%`)
  );

  // Rotación del camión según la curva
  const truckRotate = useTransform(
    normalizedProgress,
    [0, 0.167, 0.333, 0.5, 0.667, 0.833, 1],
    [0, -12, 8, -12, 8, -12, 0]
  );

  // Línea blanca que se dibuja
  const strokeDashoffset = useTransform(normalizedProgress, [0, 1], [1800, 0]);

  // Escala del camión (efecto de "motor")
  const truckScale = useTransform(normalizedProgress, [0, 1], [1, 1.1]);

  // Función para animar automáticamente
  const autoAnimate = () => {
    const duration = 3000; // 3 segundos
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
        <h2 className="truck-title">
          🚛 Control Manual del Recorrido
        </h2>

        {/* Contenedor principal de la animación */}
        <div className="truck-canvas">
          
          {/* SVG para la ruta curva */}
          <svg className="truck-svg">
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e5e7eb" />
                <stop offset="100%" stopColor="#9ca3af" />
              </linearGradient>
            </defs>
            
            {/* Ruta base (gris) */}
            <path
              d="M 60 250 Q 140 120, 280 220 Q 420 120, 560 220 Q 700 120, 840 250"
              stroke="url(#pathGradient)"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              opacity="0.3"
            />
            
            {/* Línea blanca que se va dibujando */}
            <motion.path
              d="M 60 250 Q 140 120, 280 220 Q 420 120, 560 220 Q 700 120, 840 250"
              stroke="white"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="1800"
              style={{ 
                strokeDashoffset,
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
              }}
            />
          </svg>

          {/* Camión animado */}
          <motion.div
            className="truck-vehicle"
            style={{
              x: truckX,
              y: truckY,
              rotate: truckRotate,
              scale: progress > 0 ? truckScale : 1,
              transformOrigin: 'center center'
            }}
          >
            <div className="truck-vehicle-icon">🚛</div>
            
            {/* Para usar tu PNG: */}
            {/* 
            <motion.img 
              src="/assets/images/tu-camion.png" 
              alt="Camión" 
              className="w-full h-full object-contain"
            />
            */}
          </motion.div>

          {/* Efectos de polvo detrás del camión */}
          <motion.div
            className="truck-dust"
            style={{
              x: useTransform(truckX, (x) => `calc(${x} - 20px)`),
              y: useTransform(truckY, (y) => `calc(${y} + 15px)`)
            }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="truck-dust-particle"
                style={{ 
                  left: -i * 8,
                  opacity: progress > 5 ? 0.6 : 0,
                  scale: useTransform(normalizedProgress, [0, 1], [0.5, 1])
                }}
              />
            ))}
          </motion.div>

          {/* Checkpoints que aparecen según el progreso */}
          {pathPoints.map((point, index) => {
            const checkpointProgress = (index / (pathPoints.length - 1)) * 100;
            return (
              <motion.div
                key={index}
                className="truck-checkpoint"
                style={{
                  left: `${point.x}%`,
                  top: `${point.y}%`,
                  scale: progress >= checkpointProgress ? 1 : 0,
                  opacity: progress >= checkpointProgress ? 1 : 0.3
                }}
              />
            );
          })}

          {/* Indicador de progreso en la esquina */}
          <div className="truck-progress-indicator">
            <div className="truck-progress-title">
              Progreso
            </div>
            <div className="truck-progress-bar">
              <div
                className="truck-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="truck-progress-text">
              {Math.round(progress)}%
            </div>
          </div>
        </div>

        {/* Controles */}
        <div className="truck-controls">
          {/* Slider principal */}
          <div className="truck-slider-container">
            <div>
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => setProgress(Number(e.target.value))}
                className="truck-slider"
                style={{
                  background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${progress}%, #e5e7eb ${progress}%, #e5e7eb 100%)`
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Camion;