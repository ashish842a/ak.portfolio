import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, FileText } from 'lucide-react';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const y3 = useTransform(scrollY, [0, 500], [0, 100]);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-gray-900 pt-16">
            {/* Background decoration with Parallax */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-[-10%] right-[-5%] w-72 h-72 bg-purple-500/30 rounded-full blur-3xl opacity-60"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl opacity-60"
                />
                <motion.div
                    style={{ y: y3 }}
                    className="absolute top-[40%] left-[20%] w-48 h-48 bg-pink-500/20 rounded-full blur-3xl opacity-40"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <motion.div
                    style={{ y: useTransform(scrollY, [0, 300], [0, 50]) }} // Slight parallax for content
                    className="text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-sm uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-4">
                            Full Stack Developer & AI Engineer
                        </h2>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight"
                    >
                        Hi, I'm <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Ashish Kumar</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 mb-10"
                    >
                        Building Intelligent Systems & Modern Web Applications.
                        Passionate about turning complex problems into elegant solutions.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row justify-center items-center gap-4"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-lg hover:shadow-indigo-500/30"
                        >
                            View My Work
                            <ArrowRight size={20} />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium border border-gray-200 dark:border-gray-700 hover:border-indigo-500 transition-colors flex items-center gap-2 shadow-sm hover:shadow-md"
                        >
                            Contact Me
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-12 flex justify-center gap-6"
                    >
                        <a href="https://github.com/ashish842a?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/ashish-kumar-98482b1a9/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:ashishkumar0842a@gmail.com" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            <Mail size={24} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
