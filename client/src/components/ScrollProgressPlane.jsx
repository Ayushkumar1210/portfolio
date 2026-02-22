import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const ScrollProgressPlane = () => {
    const { scrollYProgress } = useScroll();

    // Smooth out the scroll progress
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Transform the smooth progress (0-1) to horizontal position (0-93vw)
    // 93vw prevents it from going completely off-screen at the very end
    const x = useTransform(scaleX, [0, 1], ["0vw", "93vw"]);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-[100] pointer-events-none">
            {/* Progress Bar Gradient */}
            <motion.div
                className="h-full bg-gradient-to-r from-transparent via-accent to-accent origin-left opacity-50"
                style={{ scaleX }}
            />

            {/* Moving Paper Plane */}
            <motion.div
                className="absolute top-[-10px] left-0 text-accent text-xl filter drop-shadow-[0_0_8px_rgba(14,165,233,0.8)]"
                style={{
                    x, // Position controlled by transformed scroll value
                    left: 0 // Base position
                }}
            >
                <FaPaperPlane className="transform rotate-12" />
            </motion.div>
        </div>
    );
};

export default ScrollProgressPlane;
