import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Zap, Rocket, Brain, Database, Cpu } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: <Code className="w-8 h-8 text-indigo-500" />,
            title: 'Full Stack Development',
            description: 'Building scalable web applications with modern technologies like React, Node.js, and Python.'
        },
        {
            icon: <Brain className="w-8 h-8 text-purple-500" />,
            title: 'AI & Machine Learning',
            description: 'Developing intelligent systems using Deep Learning, Computer Vision, and NLP techniques.'
        },
        {
            icon: <Cpu className="w-8 h-8 text-pink-500" />,
            title: 'Deep Learning',
            description: 'Specializing in CNN architectures and advanced neural networks for complex pattern recognition.'
        },
        {
            icon: <Database className="w-8 h-8 text-emerald-500" />,
            title: 'Data Engineering',
            description: 'Designing robust data pipelines and managing efficient storage solutions for AI workflows.'
        }
    ];

    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        About Me
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Bridging the Gap Between <span className="text-indigo-600 dark:text-indigo-400">AI Research</span> & <span className="text-purple-600 dark:text-purple-400">Production Systems</span>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            I am an AI Engineer specializing in Large Language Model (LLM) applications, Retrieval-Augmented Generation (RAG), NLP, and AI-powered document intelligence systems with 2.6+ years of industry experience. Currently working with <strong className="text-gray-900 dark:text-white">DRDO</strong>, I build end-to-end AI automation solutions by integrating deep learning models with scalable backend architectures.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            My expertise lies in developing production-ready AI services using PyTorch, Flask APIs, and vector search systems. From building conversational AI agents and semantic search pipelines to advanced OCR workflows, I am passionate about leveraging AI for real-world data processing and driving operational efficiency.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3">
                                <Code className="text-indigo-600 dark:text-indigo-400" size={24} />
                                <span className="font-medium text-gray-900 dark:text-white">Full Stack Dev</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Brain className="text-purple-600 dark:text-purple-400" size={24} />
                                <span className="font-medium text-gray-900 dark:text-white">Generative AI</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Database className="text-pink-600 dark:text-pink-400" size={24} />
                                <span className="font-medium text-gray-900 dark:text-white">RAG Pipelines</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Cpu className="text-blue-600 dark:text-blue-400" size={24} />
                                <span className="font-medium text-gray-900 dark:text-white">Machine Learning</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="mb-4 bg-white dark:bg-gray-800 p-3 rounded-lg inline-block shadow-sm">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
