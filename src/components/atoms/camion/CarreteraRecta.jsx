/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import './Camion.css';
import { textos as checkpointTexts } from './Textos';

const Camion = () => {
  const [progress, setProgress] = useState(0);
  const [currentCheckpoint, setCurrentCheckpoint] = useState(0);
  const [textKey, setTextKey] = useState(0); // Para forzar re-animación de textos
  
  // MotionValue para el progreso (0 a 100)
  const progressValue = useMotionValue(progress);
  
  // Actualizar el motionValue cuando cambia el slider
  useEffect(() => {
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

  // Actualizar checkpoint actual y key para re-animar textos
  useEffect(() => {
    const newCheckpoint = getCurrentCheckpoint();
    if (newCheckpoint !== currentCheckpoint && newCheckpoint !== -1) {
      setCurrentCheckpoint(newCheckpoint);
      setTextKey(prev => prev + 1); // Incrementar key para forzar re-animación
    }
  }, [progress, currentCheckpoint]);

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

  // Función para calcular puntos sobre la carretera recta
  const calculatePointOnRoad = (t) => {
    // Carretera recta horizontal desde x=50 hasta x=1150 (ocupando más ancho)
    // Y centrada en y=240 (75% de 320)
    const startX = 50;   // Más cerca del borde izquierdo
    const endX = 1150;   // Más cerca del borde derecho
    const y = 240;
    
    const x = startX + (endX - startX) * t;
    // Convertir a porcentajes para posicionamiento del camión
    return { x: (x / 1200) * 100, y: (y / 320) * 100 };
  };

  // Calcular rotación del camión (siempre 0 grados para carretera recta)
  const calculateTruckRotation = (t) => {
    return 0; // Siempre horizontal en carretera recta
  };

  // Posición del camión siguiendo la carretera recta
  const truckX = useTransform(
    normalizedProgress,
    (t) => `${calculatePointOnRoad(t).x}%`
  );
  
  const truckY = useTransform(
    normalizedProgress,
    (t) => `${calculatePointOnRoad(t).y}%`
  );

  // Rotación del camión (siempre 0 para carretera recta)
  const truckRotation = useTransform(
    normalizedProgress,
    (t) => calculateTruckRotation(t)
  );

  // Generar path de la carretera recta ocupando más ancho
  const generateRoadPath = () => {
    return `M 50 240 L 1150 240`;
  };

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
        <div className="truck-main-layout">
          {/* Sección de animación (izquierda) */}
          <div className="truck-animation-section">
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
                {/* SVG de la carretera recta ocupando todo el ancho */}
                <svg 
                  style={{ 
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    left: '0',
                    top: '0'
                  }}
                  viewBox="0 0 1200 320"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e5e7eb" />
                      <stop offset="100%" stopColor="#9ca3af" />
                    </linearGradient>
                  </defs>
                  
                  {/* Carretera base recta - ocupando más ancho */}
                  <line
                    x1="50" y1="240" 
                    x2="1150" y2="240"
                    stroke="#6b7280"
                    strokeWidth="50"
                    strokeLinecap="round"
                    opacity="0.8"
                  />

                  {/* Línea blanca central */}
                  <line
                    x1="50" y1="240" 
                    x2="1150" y2="240"
                    stroke="white"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray="20 10"
                    style={{ 
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                    }}
                  />

                  {/* Checkpoints en la carretera recta */}
                  {[0, 0.264, 0.533, 0.79, 1].map((t, index) => {
                    const point = calculatePointOnRoad(t);
                    const checkpointProgress = t * 100;
                    const x = 50 + (1100 * t); // Calculado con el nuevo rango
                    const isActive = progress >= checkpointProgress;
                    const checkpointText = checkpointTexts[index];
                    
                    return (
                      <g key={`road-checkpoint-${index}`}>
                        {/* Checkpoint círculo */}
                        <circle
                          cx={x}
                          cy="240"
                          r="12"
                          fill={isActive ? "#10b981" : "#6b7280"}
                          stroke="white"
                          strokeWidth="3"
                        />
                        
                        {/* Cuadro de texto que aparece cuando se activa el checkpoint */}
                        {isActive && checkpointText && (
                          <g>
                            {/* Fondo del cuadro de texto */}
                            <rect
                              x={x - 80}
                              y="80"
                              width="180"
                              height="35"
                              rx="6"
                              fill="rgba(255, 255, 255, 0.95)"
                              stroke="#e5e7eb"
                              strokeWidth="1"
                              style={{
                                filter: 'drop-shadow(0 2px 6px rgba(32, 32, 32, 0.34))'
                              }}
                            />
                            
                            {/* Texto del cuadro */}
                            <text
                              x={x}
                              y="102"
                              textAnchor="middle"
                              fontSize="14"
                              fontWeight="600"
                              fill="#424242ff"
                              style={{
                                fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif;'
                              }}
                            >
                              {checkpointText.title}
                            </text>
                          </g>
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Camión que se mueve por la carretera recta */}
              <motion.div
                style={{
                  position: 'absolute',
                  left: useTransform(truckX, (x) => `calc(${x})`),
                  top: useTransform(truckY, (y) => `calc(${y} - 15%)`),
                  transform: 'translate(-50%, -50%)',
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
                      backgroundColor: '#3478b8',
                      borderRadius: '50%'
                    }} 
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Sección de contenido (derecha) */}
          <div className="truck-content-section">
            {/* Sección de información del checkpoint actual */}
            <div className="truck-info-section" key={textKey}>
              <h3 className="truck-info-title">
                {checkpointTexts[currentCheckpoint]?.title || 'Cargando...'}
              </h3>
              <p className="truck-info-description">
                {checkpointTexts[currentCheckpoint]?.description || 'Preparando información...'}
              </p>
            </div>

            <div className="truck-controls">
              {/* Botones de navegación entre checkpoints */}
              <div className="truck-buttons">
                <button
                  onClick={goToPreviousCheckpoint}
                  disabled={getCurrentCheckpoint() <= 0}
                  className={`truck-button ${getCurrentCheckpoint() <= 0 ? '' : 'truck-button-red'}`}
                  
                >
                  &lt;
                </button>
                <button
                  onClick={goToNextCheckpoint}
                  disabled={getCurrentCheckpoint() >= checkpoints.length - 1}
                  className={`truck-button ${getCurrentCheckpoint() >= checkpoints.length - 1 ? '' : 'truck-button-green'}`}
                >
                   &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Camion;