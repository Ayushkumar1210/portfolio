import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col md:flex-row items-center gap-16"
                >
                    <div className="md:w-5/12">
                        <div className="relative group max-w-sm mx-auto">
                            <div className="absolute -inset-2 bg-gradient-to-r from-accent to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-300"></div>
                            <div className="relative bg-secondary ring-1 ring-white/10 rounded-2xl overflow-hidden shadow-2xl">
                                <img src="/profile.jpg" alt="Profile" className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-7/12">
                        <h2 className="text-4xl font-display font-bold mb-6 text-white tracking-tight flex items-center gap-4">
                            <span className="text-accent text-2xl font-mono font-medium tracking-normal">01.</span> About Me
                            <div className="h-[1px] bg-slate-800 flex-grow ml-4"></div>
                        </h2>
                        <div className="space-y-5 text-slate-400 text-lg font-light leading-relaxed">
                            <p>
                                Hello! I'm Ayush, a passionate Full-Stack Developer and Computer Science student with a strong interest in building scalable, efficient, and user-focused web applications. I enjoy transforming ideas into real-world digital solutions using clean, maintainable, and well-structured code.
                            </p>
                            <p>
                                My journey into development began with curiosity about how websites work, and it quickly grew into a deep passion for both frontend and backend technologies. I enjoy working across the full stack — designing intuitive user interfaces and developing robust backend systems that ensure performance, reliability, and scalability.
                            </p>
                            <p>
                                Currently pursuing my B.Tech in Computer Science, I am continuously improving my skills in modern web technologies, data structures, and software development practices. I am highly motivated to contribute to innovative teams, solve real-world problems, and deliver high-quality software solutions in a professional corporate environment.
                            </p>
                        </div>
                        <a href="/resume.pdf" download="Ayush_Kumar_Resume.pdf" className="inline-block mt-10 px-8 py-3.5 rounded-lg border border-accent/50 text-accent hover:bg-accent hover:text-primary hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all duration-300 font-medium">
                            Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
