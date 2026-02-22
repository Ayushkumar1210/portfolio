import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            await axios.post('https://formsubmit.co/ajax/as5033238@gmail.com', {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                _subject: "New Message from Portfolio Website!"
            });
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            console.error(err);
            setStatus('Failed to send message.');
        }
    };

    return (
        <section id="contact" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-3xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-6 mt-4">
                        Get In Touch
                    </h2>
                    <p className="text-slate-400 max-w-xl text-lg font-light leading-relaxed">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="glass p-8 md:p-12 rounded-2xl text-left space-y-6 relative overflow-hidden"
                >
                    {/* Inner glowing accent */}
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none"></div>

                    <div className="grid md:grid-cols-2 gap-6 relative z-10">
                        <div className="space-y-2">
                            <label className="block text-slate-300 text-sm font-medium tracking-wide">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-3.5 bg-black/20 border border-white/10 rounded-lg text-slate-200 focus:outline-none focus:border-accent focus:bg-white/5 transition-all duration-300"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-slate-300 text-sm font-medium tracking-wide">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-3.5 bg-black/20 border border-white/10 rounded-lg text-slate-200 focus:outline-none focus:border-accent focus:bg-white/5 transition-all duration-300"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>
                    <div className="space-y-2 relative z-10">
                        <label className="block text-slate-300 text-sm font-medium tracking-wide">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="6"
                            className="w-full p-4 bg-black/20 border border-white/10 rounded-lg text-slate-200 focus:outline-none focus:border-accent focus:bg-white/5 transition-all duration-300 resize-none w-full"
                            placeholder="Hello Ayush, I'd like to talk about..."
                        ></textarea>
                    </div>
                    <div className="pt-4 text-center relative z-10">
                        <button
                            type="submit"
                            className="px-10 py-4 rounded-lg bg-accent text-primary font-bold hover:bg-white hover:text-primary hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-all duration-300 w-full md:w-auto min-w-[200px]"
                        >
                            Say Hello
                        </button>
                    </div>
                    {status && <p className="text-center mt-6 text-accent font-medium relative z-10">{status}</p>}
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
