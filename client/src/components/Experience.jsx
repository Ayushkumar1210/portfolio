import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const [activeTab, setActiveTab] = useState('education');

    const education = [
        {
            institution: "Lovely Professional University",
            degree: "B.Tech in Computer Science",
            duration: "2023 - 2027",
            details: [
                "CGPA: 7.5/10",
                "Reasoning about complex systems",
                "Relevant Coursework: DSA, DBMS, OS, CN, OOP"
            ]
        },
        {
            institution: "Almomin-International School",
            degree: "Science Stream",
            duration: "2020 - 2022",
            details: ["Focus on Physics, Chemistry, and Mathematics"]
        }
    ];

    const experience = [
        {
            role: "Prompt and Output Evaluator",
            company: "Outlier (Scale AI)",
            url: "https://outlier.ai/",
            duration: "December 2024 - March 2025",
            details: [
                "Worked more than 700+ hours as a prompt and output evaluator",
                "Evaluated AI model responses for Mathematics, Physics, and Coding"
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex justify-center items-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight flex items-center gap-4">
                        <span className="text-accent text-2xl font-mono font-medium tracking-normal">03.</span> Where I've Been
                        <div className="hidden md:block h-[1px] bg-slate-800 w-32 ml-4"></div>
                    </h2>
                </motion.div>

                <div className="flex justify-center mb-10 space-x-2">
                    <button
                        onClick={() => setActiveTab('education')}
                        className={`px-8 py-3 rounded-full transition-all duration-300 font-medium ${activeTab === 'education' ? 'bg-accent/10 text-accent border border-accent shadow-[0_0_15px_rgba(14,165,233,0.2)]' : 'bg-secondary/40 text-slate-400 hover:text-slate-200 border border-white/5 hover:bg-secondary/60'}`}
                    >
                        Education
                    </button>
                    <button
                        onClick={() => setActiveTab('experience')}
                        className={`px-8 py-3 rounded-full transition-all duration-300 font-medium ${activeTab === 'experience' ? 'bg-accent/10 text-accent border border-accent shadow-[0_0_15px_rgba(14,165,233,0.2)]' : 'bg-secondary/40 text-slate-400 hover:text-slate-200 border border-white/5 hover:bg-secondary/60'}`}
                    >
                        Experience
                    </button>
                </div>

                <div className="glass p-8 md:p-12 rounded-2xl min-h-[350px] relative overflow-hidden">
                    {/* Decorative glow inside glass card */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-[60px] pointer-events-none"></div>

                    {activeTab === 'education' ? (
                        <div className="space-y-12">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                    transition={{ duration: 0.4 }}
                                    className="relative pl-6 border-l border-slate-700/50 hover:border-accent transition-colors duration-300"
                                >
                                    <div className="absolute w-3 h-3 bg-primary border-2 border-accent rounded-full -left-[6.5px] top-2"></div>
                                    <h3 className="text-xl md:text-2xl font-display font-semibold text-slate-100 flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                                        {edu.degree}
                                        <span className="text-accent hidden md:inline">@</span>
                                        <span className="text-accent/90">{edu.institution}</span>
                                    </h3>
                                    <span className="text-sm font-mono text-slate-500 block mt-1 mb-5">{edu.duration}</span>
                                    <ul className="space-y-3">
                                        {edu.details.map((detail, i) => (
                                            <li key={i} className="text-slate-400 flex items-start gap-3">
                                                <span className="text-accent mt-1 text-xs">▹</span>
                                                <span className="font-light leading-relaxed">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-12">
                            {experience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                    transition={{ duration: 0.4 }}
                                    className="relative pl-6 border-l border-slate-700/50 hover:border-accent transition-colors duration-300"
                                >
                                    <div className="absolute w-3 h-3 bg-primary border-2 border-accent rounded-full -left-[6.5px] top-2"></div>
                                    <h3 className="text-xl md:text-2xl font-display font-semibold text-slate-100 flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                                        {exp.role}
                                        <span className="text-accent hidden md:inline">@</span>
                                        {exp.url ? (
                                            <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-accent/90 hover:text-accent hover:underline transition-colors duration-300">
                                                {exp.company}
                                            </a>
                                        ) : (
                                            <span className="text-accent/90">{exp.company}</span>
                                        )}
                                    </h3>
                                    <span className="text-sm font-mono text-slate-500 block mt-1 mb-5">{exp.duration}</span>
                                    <ul className="space-y-3">
                                        {exp.details.map((detail, i) => (
                                            <li key={i} className="text-slate-400 flex items-start gap-3">
                                                <span className="text-accent mt-1 text-xs">▹</span>
                                                <span className="font-light leading-relaxed">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Experience;
