import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-2">
                            Ashish Kumar
                        </h2>
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} All rights reserved. Built with React & Tailwind CSS.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/ashish842a?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/ashish-kumar-98482b1a9/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                        {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Twitter size={24} />
                        </a> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
