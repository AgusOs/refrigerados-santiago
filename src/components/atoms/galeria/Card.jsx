import React from "react";
import styles from "./Galeria.module.css";
import { AnimatePresence, motion } from "motion/react";

export const Card = ({ image, title }) => {

    const [showOverlay, setShowOverlay] = React.useState(false);

  return (
    <motion.div className={styles.card}
        onHoverStart={() => setShowOverlay(true)}
        onHoverEnd={() => setShowOverlay(false)}
    >
        <AnimatePresence>
            {showOverlay && (
                <motion.div className={styles.overlayContainer}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className={styles.overlayBg}/>
                    <motion.h1 className={styles.overlayTitle}
                        initial={{ y: 5 }}
                        animate={{ y: 0 }}
                        exit={{ y: 5 }}
                    >
                        <span>Ver</span>
                    </motion.h1>
                </motion.div>
            )}
        </AnimatePresence>
      <img src={image} alt={title} className={styles.cardImg}/>
    </motion.div>
  );
}