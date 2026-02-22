import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="bg-[#050505] py-10 text-center text-slate-500 border-t border-white/5 relative z-10 flex flex-col items-center justify-center gap-6">
            <div className="flex gap-6">
                <a href="https://github.com/Ayushkumar1210" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors hover:-translate-y-1 transform duration-300">
                    <FaGithub size={22} />
                </a>
                <a href="https://leetcode.com/u/Ayush913/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors hover:-translate-y-1 transform duration-300">
                    <SiLeetcode size={22} />
                </a>
                <a href="https://www.linkedin.com/in/ayush-kumar-516b56293/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors hover:-translate-y-1 transform duration-300">
                    <FaLinkedin size={22} />
                </a>
            </div>
            <p className="text-sm font-mono tracking-wide hover:text-accent transition-colors duration-300">
                Designed & Built by Ayush Kumar
            </p>
        </footer>
    );
};

export default Footer;
