import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-scroll';
import { useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Hero = () => {
    const fullText = "Ayush Kumar";
    const [text, setText] = useState('');
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 }); // Trigger when 50% visible

    useEffect(() => {
        if (isInView) {
            // Reset and start typing
            setText('');
            let currentIndex = 0;
            const interval = setInterval(() => {
                if (currentIndex <= fullText.length) {
                    setText(fullText.slice(0, currentIndex));
                    currentIndex++;
                } else {
                    clearInterval(interval);
                }
            }, 100); // Typing speed
            return () => clearInterval(interval);
        } else {
            // Optional: Clear text when out of view to ensure it retypes fresh
            setText('');
        }
    }, [isInView]);

    return (
        <section id="home" className="h-screen flex items-center justify-center relative">

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="text-center z-10 px-4 relative max-w-4xl" ref={ref}>
                <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl mb-4 font-mono font-medium text-accent tracking-wide"
                >
                    My name is
                </motion.p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-4 h-20 md:h-28 tracking-tighter drop-shadow-md">
                    {text}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="text-accent ml-1 inline-block drop-shadow-[0_0_10px_rgba(14,165,233,0.8)]"
                    >
                        |
                    </motion.span>
                </h1>
                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="text-3xl md:text-5xl font-display font-bold text-slate-400 mb-8 tracking-tight"
                >
                    I build things for the web.
                </motion.h2>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 1.7 }}
                    className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed font-light"
                >
                    I'm a B.Tech Computer Science student specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 1.9 }}
                    className="flex flex-col sm:flex-row justify-center gap-6"
                >
                    <Link to="projects" smooth={true} duration={500}>
                        <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-white/10 text-white hover:text-accent hover:border-accent hover:bg-accent/10 transition-all duration-300 font-medium bg-white/5 backdrop-blur-md hover:shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                            Check out my work!
                        </button>
                    </Link>
                    <Link to="contact" smooth={true} duration={500}>
                        <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-accent text-primary font-semibold hover:bg-white hover:text-primary hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-all duration-300">
                            Contact Me
                        </button>
                    </Link>
                </motion.div>
            </div>



            {/* Left Side - Social Icons */}
            <div className="absolute left-6 xl:left-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 w-20 z-50">
                {[
                    { icon: <FaGithub size={26} />, link: "https://github.com/Ayushkumar1210" },
                    { icon: <SiLeetcode size={26} />, link: "https://leetcode.com/u/Ayush913/" },
                    { icon: <FaLinkedin size={26} />, link: "https://www.linkedin.com/in/ayush-kumar-516b56293/" }
                ].map((item, index) => (
                    <motion.a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 glass text-slate-400 hover:text-white rounded-full flex items-center justify-center cursor-pointer transition-colors"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.5 + (index * 0.2) }}
                        whileHover={{ scale: 1.15, y: -5, borderColor: 'rgba(14,165,233,0.5)', boxShadow: '0 0 15px rgba(14,165,233,0.3)' }}
                    >
                        {item.icon}
                    </motion.a>
                ))}
            </div>

            {/* Right Side - Interactive Floating Icons */}
            <div className="absolute right-6 xl:right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 w-20">
                {['react', 'node', 'mongo'].map((icon, index) => (
                    <motion.div
                        key={icon}
                        className="w-14 h-14 glass rounded-full flex items-center justify-center cursor-pointer"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.5 + (index * 0.2) }}
                        whileHover={{ scale: 1.15, y: -5, borderColor: 'rgba(14,165,233,0.5)', boxShadow: '0 0 15px rgba(14,165,233,0.3)' }}
                        drag
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        dragElastic={0.2}
                    >
                        {icon === 'react' && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-8 h-8 animate-spin-slow opacity-80" />}
                        {icon === 'node' && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node" className="w-8 h-8 opacity-80" />}
                        {icon === 'mongo' && <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-8 h-8 opacity-80" />}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Hero;
