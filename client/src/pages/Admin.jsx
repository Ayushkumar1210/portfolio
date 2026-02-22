import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaPlus } from 'react-icons/fa';

import { motion } from 'framer-motion';

const Admin = () => {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [messages, setMessages] = useState([]);
    const [activeTab, setActiveTab] = useState('projects');
    const [newProject, setNewProject] = useState({
        title: '', description: '', techStack: '', githubLink: '', liveLink: '', category: 'Full Stack', image: ''
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) navigate('/login');

        fetchProjects();
        fetchMessages();
    }, [navigate]);

    const fetchProjects = async () => {
        try {
            const res = await axios.get('http://localhost:5001/api/projects');
            // If empty, we might not render anything or render placeholder if in dev
            if (res.data) setProjects(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchMessages = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await axios.get('http://localhost:5001/api/contact', {
                headers: { 'x-auth-token': token }
            });
            if (res.data) setMessages(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleProjectSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const projectData = {
            ...newProject,
            techStack: newProject.techStack.split(',').map(s => s.trim())
        };

        try {
            await axios.post('http://localhost:5001/api/projects', projectData, {
                headers: { 'x-auth-token': token }
            });
            fetchProjects();
            setNewProject({ title: '', description: '', techStack: '', githubLink: '', liveLink: '', category: 'Full Stack', image: '' });
            alert('Project Added!');
        } catch (err) {
            console.error(err);
            alert('Error adding project');
        }
    };

    const handleDeleteProject = async (id) => {
        const token = localStorage.getItem('token');
        if (window.confirm('Are you sure?')) {
            try {
                await axios.delete(`http://localhost:5001/api/projects/${id}`, {
                    headers: { 'x-auth-token': token }
                });
                fetchProjects();
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-primary text-slate-200 p-8"
        >
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

                <div className="flex space-x-4 mb-8">
                    <button onClick={() => setActiveTab('projects')} className={`px-4 py-2 rounded ${activeTab === 'projects' ? 'bg-accent text-primary' : 'bg-secondary'}`}>Manage Projects</button>
                    <button onClick={() => setActiveTab('messages')} className={`px-4 py-2 rounded ${activeTab === 'messages' ? 'bg-accent text-primary' : 'bg-secondary'}`}>Messages</button>
                </div>

                {activeTab === 'projects' ? (
                    <div>
                        <div className="bg-secondary p-6 rounded-lg mb-8 border border-slate-800">
                            <h2 className="text-xl font-bold mb-4">Add New Project</h2>
                            <form onSubmit={handleProjectSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input placeholder="Title" value={newProject.title} onChange={e => setNewProject({ ...newProject, title: e.target.value })} className="p-2 bg-primary rounded border border-slate-700" required />
                                <input placeholder="Category" value={newProject.category} onChange={e => setNewProject({ ...newProject, category: e.target.value })} className="p-2 bg-primary rounded border border-slate-700" />
                                <input placeholder="Tech Stack (comma separated)" value={newProject.techStack} onChange={e => setNewProject({ ...newProject, techStack: e.target.value })} className="p-2 bg-primary rounded border border-slate-700" required />
                                <input placeholder="Image URL" value={newProject.image} onChange={e => setNewProject({ ...newProject, image: e.target.value })} className="p-2 bg-primary rounded border border-slate-700" />
                                <input placeholder="GitHub URL" value={newProject.githubLink} onChange={e => setNewProject({ ...newProject, githubLink: e.target.value })} className="p-2 bg-primary rounded border border-slate-700" />
                                <input placeholder="Live URL" value={newProject.liveLink} onChange={e => setNewProject({ ...newProject, liveLink: e.target.value })} className="p-2 bg-primary rounded border border-slate-700" />
                                <textarea placeholder="Description" value={newProject.description} onChange={e => setNewProject({ ...newProject, description: e.target.value })} className="p-2 bg-primary rounded border border-slate-700 md:col-span-2" rows="3" required />
                                <button type="submit" className="bg-accent text-primary font-bold py-2 rounded md:col-span-2 hover:bg-accent/80">Add Project</button>
                            </form>
                        </div>

                        <div className="grid gap-4">
                            {projects.map(project => (
                                <div key={project._id} className="bg-secondary p-4 rounded flex justify-between items-center border border-slate-800">
                                    <div>
                                        <h3 className="font-bold">{project.title}</h3>
                                        <p className="text-sm text-slate-400">{project.category}</p>
                                    </div>
                                    <button onClick={() => handleDeleteProject(project._id)} className="text-red-500 hover:text-red-400"><FaTrash /></button>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {messages.length === 0 && <p>No messages yet.</p>}
                        {messages.map(msg => (
                            <div key={msg._id} className="bg-secondary p-4 rounded border border-slate-800">
                                <div className="flex justify-between mb-2">
                                    <h3 className="font-bold">{msg.name}</h3>
                                    <span className="text-sm text-slate-400">{new Date(msg.createdAt).toLocaleDateString()}</span>
                                </div>
                                <p className="text-accent text-sm mb-2">{msg.email}</p>
                                <p className="text-slate-300">{msg.message}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default Admin;
