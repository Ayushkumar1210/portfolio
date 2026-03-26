import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('All');

    // Placeholder data in case fetching fails or is empty initially
    const placeholderProjects = [
        {
            _id: '1',
            title: 'Loan Tracker',
            description: 'A robust application designed for tracking and managing loans effectively.',
            techStack: ['React', 'Node.js', 'MongoDB'],
            githubLink: 'https://github.com/5556Prabhat/Loan-Tracker',
            liveLink: 'https://github.com/5556Prabhat/Loan-Tracker',
            category: 'Full Stack',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
        },
        {
            _id: '2',
            title: 'Algorithm',
            description: 'A collection of Data Structures and Algorithms implementations and solutions.',
            techStack: ['C++', 'Python', 'Java', 'DSA'],
            githubLink: 'https://github.com/Ayushkumar1210/algorithm',
            liveLink: 'https://ayushkumar1210.github.io/algorithm/',
            category: 'DSA',
            image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop'
        },
        {
            _id: '3',
            title: 'Disaster Relief System',
            description: 'A Disaster Relief Management System designed to efficiently allocate resources and support real-time emergency response.',
            techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
            githubLink: 'https://github.com/Ayushkumar1210/disaster-relief-system',
            liveLink: 'https://ayushkumar1210.github.io/disaster-relief-system/',
            category: 'Full Stack',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'
        }
    ];

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get('http://localhost:5001/api/projects');
                if (res.data.length > 0) {
                    setProjects(res.data);
                } else {
                    setProjects(placeholderProjects);
                }
            } catch (err) {
                console.log('Error fetching projects, using placeholder data');
                setProjects(placeholderProjects);
            }
        };
        fetchProjects();
    }, []);

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter || project.techStack.includes(filter));

    const categories = ['All', 'Full Stack', 'DSA'];

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex justify-center md:justify-start items-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight flex items-center gap-4 w-full">
                        <span className="text-accent text-2xl font-mono font-medium tracking-normal">04.</span> Some Things I've Built
                        <div className="h-[1px] bg-slate-800 flex-grow ml-4 md:max-w-md"></div>
                    </h2>
                </motion.div>

                {/* Filter */}
                <div className="flex justify-center flex-wrap gap-4 mb-16 px-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2.5 rounded-full border transition-all duration-300 font-medium text-sm ${filter === cat ? 'bg-accent/10 border-accent text-accent shadow-[0_0_15px_rgba(14,165,233,0.2)]' : 'bg-white/5 border-white/10 text-slate-400 hover:border-accent/50 hover:text-white'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project._id}
                            layout
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="glass-card rounded-2xl overflow-hidden flex flex-col group"
                        >
                            <div className="h-56 overflow-hidden relative">
                                <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                <img src={project.image || "https://via.placeholder.com/600x400"} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <a href={project.liveLink || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-accent no-underline cursor-pointer">
                                        <h3 className="text-2xl font-display font-bold text-slate-100 group-hover:text-accent transition-colors">{project.title}</h3>
                                    </a>
                                    <div className="flex space-x-4 text-slate-400 mt-1">
                                        {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent text-xl transition-colors"><FaGithub /></a>}
                                        {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent text-xl transition-colors"><FaExternalLinkAlt /></a>}
                                    </div>
                                </div>
                                <p className="text-slate-400 mb-6 text-sm leading-relaxed font-light">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
