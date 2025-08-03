import React from "react";

// Componente Card
const Card = ({ image, onClick }) => {
    const handleClick = () => {
        console.log('Card clicked:', image); // Debug
        onClick(image);
    };

    return (
        <div className="card" onClick={handleClick}>
            <img 
                src={image} 
                alt="Gallery" 
                className="cardImg"
            />
            <div className="overlayContainer">
                <div className="overlayBg"></div>
                <div className="overlayTitle">
                    Ver imagen
                </div>
            </div>
        </div>
    );
};

// Componente principal Galeria
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
    const [isHovering, setIsHovering] = React.useState(false);
    const galeriaRef = React.useRef(null);
    const animationRef = React.useRef(null);

    // Animación del carrusel
    React.useEffect(() => {
        const galeria = galeriaRef.current;
        if (!galeria) return;

        const totalWidth = galeria.scrollWidth;
        const duration = isHovering ? 100 : 30; // Más lento en hover
        
        let startTime = null;
        let startPosition = parseFloat(galeria.style.transform.replace('translateX(', '').replace('px)', '')) || 0;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            
            const elapsed = currentTime - startTime;
            const progress = (elapsed / (duration * 1000)) % 1;
            
            // Calcular posición: desde startPosition hasta -totalWidth/2
            const targetDistance = -totalWidth / 2 - startPosition;
            const currentPosition = startPosition + (targetDistance * progress);
            
            galeria.style.transform = `translateX(${currentPosition}px)`;
            
            // Resetear cuando llegue al final
            if (progress >= 1) {
                galeria.style.transform = 'translateX(0px)';
                startTime = null;
                startPosition = 0;
            }
            
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isHovering]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    // Cerrar modal con tecla Escape
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };

        if (selectedImage) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    return (
        <>
            <style jsx>{`
                .galeriaContainer {
                    width: 100%;
                    overflow: hidden;
                    position: relative;
                }

                .galeria {
                    display: flex;
                    gap: 10px;
                    width: max-content;
                    transition: transform 0.1s linear;
                }

                .overlayContainer {
                    position: absolute;
                    inset: 0;
                    z-index: 10;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .card:hover .overlayContainer {
                    opacity: 1;
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
                    gap: 0.5ch;
                    transition: 0.3s ease;
                    color: #4b4b4b;
                    cursor: pointer;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
                    pointer-events: none;
                }

                .overlayTitle:hover {
                    transform: scale(1.05);
                }

                .card {
                    position: relative;
                    overflow: hidden;
                    height: 200px;
                    min-width: 280px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex: 0 0 280px;
                    cursor: pointer;
                }

                .cardImg {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    cursor: pointer;
                    transition: transform 0.3s ease;
                }

                .cardImg:hover {
                    transform: scale(1.02);
                }

                .modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background-color: rgba(0, 0, 0, 0.9);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                    cursor: pointer;
                    animation: fadeIn 0.3s ease;
                }

                .modalContent {
                    position: relative;
                    max-width: 70vw;
                    max-height: 70vh;
                    cursor: default;
                    animation: scaleIn 0.3s ease;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .modalImage {
                    max-width: 70%;
                    max-height: 70%;
                    width: auto;
                    height: auto;
                    object-fit: contain;
                    border-radius: 12px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                }

                .closeButton {
                    position: absolute;
                    top: -50px;
                    right: 0;
                    color: white;
                    font-size: 36px;
                    font-weight: bold;
                    cursor: pointer;
                    z-index: 1001;
                    background: rgba(0, 0, 0, 0.5);
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    border: none;
                }

                .closeButton:hover {
                    background: rgba(255, 255, 255, 0.2);
                    transform: scale(1.1);
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes scaleIn {
                    from { 
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to { 
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @media (max-width: 768px) {
                    .closeButton {
                        top: 10px;
                        right: 10px;
                        font-size: 28px;
                        width: 35px;
                        height: 35px;
                    }
                    
                    .modalContent {
                        max-width: 90vw;
                        max-height: 80vh;
                    }
                }
            `}</style>

            <div className="galeriaContainer">
                <div 
                    className="galeria"
                    ref={galeriaRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {[...images, ...images].map((image, index) => (
                        <Card 
                            image={image} 
                            key={index}
                            onClick={handleImageClick}
                        />
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedImage && (
                <div 
                    className="modal" 
                    onClick={closeModal}
                >
                    <div 
                        className="modalContent"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="closeButton" onClick={closeModal}>
                            ×
                        </button>
                        <img 
                            src={selectedImage} 
                            alt="Enlarged" 
                            className="modalImage"
                        />
                    </div>
                </div>
            )}
        </>
    );
}