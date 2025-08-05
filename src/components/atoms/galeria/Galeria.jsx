import React from "react";
import { motion, useMotionValue, useAnimationFrame } from 'motion/react';
import { Card } from "./Card";
import { Modal } from "./Modal";

export const Galeria = () => {
    const images = [
        "/assets/galeria/1.JPG",
        "/assets/galeria/2.JPG",
        "/assets/galeria/13.jpeg",
        "/assets/galeria/11.jpeg",
        "/assets/galeria/9.jpeg",
        "/assets/galeria/3.jpeg",
        "/assets/galeria/4.jpeg",
        "/assets/galeria/6.jpeg",
        "/assets/galeria/5.jpeg",
        "/assets/galeria/7.jpeg",
        "/assets/galeria/8.jpeg",
        "/assets/galeria/10.jpeg",
        "/assets/galeria/12.jpeg",
        "/assets/galeria/14.jpeg"
    ];

    const [selectedImage, setSelectedImage] = React.useState(null);
    const [isMobile, setIsMobile] = React.useState(false);
    const [isHovering, setIsHovering] = React.useState(false);
    
    const x = useMotionValue(0);
    const speedRef = React.useRef(1);
    
    // Configurar velocidades
    const normalSpeed = isMobile ? 0.3 : 0.5; // pixels por frame
    const hoverSpeed = isMobile ? 0.1 : 0.2;   // pixels por frame (más lento)
    
    // Animación continua con useAnimationFrame
    useAnimationFrame(() => {
        const currentSpeed = isHovering ? hoverSpeed : normalSpeed;
        const maxDistance = images.length * (isMobile ? 262 : 315);
        
        x.set(x.get() - currentSpeed);
        
        // Reset cuando llegue al final
        if (x.get() <= -maxDistance) {
            x.set(0);
        }
    });

    // Detectar dispositivos móviles
    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <style jsx>{`
                .galeriaContainer {
                    width: 100%;
                    overflow: hidden;
                    position: relative;
                    padding: 20px 0;
                }

                .galeria {
                    display: flex;
                    gap: 15px;
                    padding: 0 20px;
                }

                .overlayContainer {
                    position: absolute;
                    inset: 0;
                    z-index: 10;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .overlayBg {
                    height: 100%;
                    width: 100%;
                    border-radius: 8px;
                    position: absolute;
                    background-color: black;
                    pointer-events: none;
                    opacity: 0.6;
                }

                .overlayTitle {
                    background-color: white;
                    font-size: 16px;
                    font-weight: bold;
                    z-index: 10;
                    padding: 8px 16px;
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    color: #4b4b4b;
                    cursor: pointer;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
                    pointer-events: none;
                }

                .card {
                    position: relative;
                    overflow: hidden;
                    height: 250px;
                    min-width: 300px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex: 0 0 300px;
                    cursor: pointer;
                    border-radius: 12px;
                }

                .cardImg {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    border-radius: 12px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                }

                .modal-image {
                    max-width: 100%;
                    max-height: 100%;
                    border-radius: 8px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                }

                @media (max-width: 768px) {
                    .card {
                        min-width: 250px;
                        flex: 0 0 250px;
                        height: 200px;
                    }
                    
                    .galeria {
                        padding: 0 15px;
                        gap: 12px;
                    }
                }
            `}</style>

            <div className="galeriaContainer">
                <motion.div 
                    className="galeria"
                    style={{ x }}
                    drag="x"
                    dragConstraints={{ 
                        left: -(images.length * (isMobile ? 262 : 315)), 
                        right: 0 
                    }}
                    dragElastic={0.1}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {[...images, ...images].map((image, index) => (
                        <Card 
                            image={image} 
                            key={index}
                            index={index}
                            onClick={handleImageClick}
                        />
                    ))}
                </motion.div>
            </div>

            <Modal isOpen={!!selectedImage} onClose={closeModal}>
                {selectedImage && (
                    <motion.img 
                        src={selectedImage} 
                        alt="Imagen ampliada" 
                        className="modal-image"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                )}
            </Modal>
        </>
    );
};