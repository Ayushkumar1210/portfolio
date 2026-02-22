import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiMongodb, SiCplusplus, SiTailwindcss, SiMysql } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { name: "C++", icon: <SiCplusplus className="text-blue-500 text-3xl" /> },
        { name: "React.js", icon: <FaReact className="text-blue-400 text-3xl" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300 text-3xl" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-3xl" /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400 text-3xl" /> },
        { name: "Python", icon: <FaPython className="text-blue-300 text-3xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-3xl" /> },
        { name: "Git/GitHub", icon: <FaGithub className="text-white text-3xl" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-400 text-3xl" /> }
    ];

    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex justify-center md:justify-start items-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight flex items-center gap-4 w-full">
                        <span className="text-accent text-2xl font-mono font-medium tracking-normal">02.</span> Technical Skills
                        <div className="h-[1px] bg-slate-800 flex-grow ml-4 md:max-w-md"></div>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="glass-card p-6 rounded-xl flex flex-col items-center justify-center gap-4 group cursor-default"
                        >
                            <div className="group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 drop-shadow-md">
                                {skill.icon}
                            </div>
                            <span className="text-slate-300 font-medium text-sm text-center group-hover:text-white transition-colors">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
