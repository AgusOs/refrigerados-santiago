import React from "react";
import { motion, AnimatePresence, useMotionValue, useAnimationFrame } from 'motion/react';

// Componente Modal con Framer Motion
export const Modal = ({ isOpen, onClose, children }) => {
    React.useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <style jsx>{`
                        .modal {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100vw;
                            height: 100vh;
                            background: rgba(0, 0, 0, 0.9);
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            z-index: 1000;
                        }

                        .modal-content {
                            position: relative;
                            max-width: 80vw;
                            max-height: 80vh;
                            overflow: hidden;
                            border-radius: 8px;
                        }

                        .modal-image {
                            max-width: 100%;
                            max-height: 100%;
                            border-radius: 8px;
                            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                            object-fit: contain;
                        }

                        .close-btn {
                            position: absolute;
                            top: -40px;
                            right: 0;
                            background: rgba(0, 0, 0, 0.5);
                            border: none;
                            color: white;
                            font-size: 30px;
                            width: 40px;
                            height: 40px;
                            border-radius: 50%;
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }

                        .close-btn:hover {
                            background: rgba(255, 255, 255, 0.2);
                        }

                        @media (max-width: 768px) {
                            .close-btn {
                                top: 10px;
                                right: 10px;
                                font-size: 24px;
                                width: 35px;
                                height: 35px;
                            }

                            .modal-content {
                                max-width: 90vw;
                                max-height: 90vh;
                            }
                        }
                    `}</style>

                    <motion.div 
                        className="modal" 
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div 
                            className="modal-content" 
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <motion.button 
                                className="close-btn" 
                                onClick={onClose}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                ×
                            </motion.button>
                            {children}
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};