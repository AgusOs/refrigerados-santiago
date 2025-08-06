import React from "react";
import { motion } from 'motion/react';

export const Card = ({ image, onClick, index }) => {
    const handleClick = () => {
        onClick(image);
    };

    return (
        <motion.div 
            className="card" 
            onClick={handleClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut" 
            }}
            whileTap={{ scale: 0.95 }}
        >
            <motion.img 
                src={image} 
                alt="Gallery" 
                className="cardImg"
            />
            <motion.div 
                className="overlayContainer"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
            >
                <div className="overlayBg"></div>
                <motion.div 
                    className="overlayTitle"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Ver imagen
                </motion.div>
            </motion.div>
        </motion.div>
    );
};