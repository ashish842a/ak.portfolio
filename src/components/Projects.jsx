import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

import projectsData from '../data/projects.json';

const Projects = () => {
    const projects = projectsData;

    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-gray-50/50 dark:bg-gray-900/40 border border-gray-200/50 dark:border-gray-800/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 group flex flex-col h-full backdrop-blur-sm"
                        >
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-indigo-600 transition-all duration-300 border border-white/20"
                                        title="View Code"
                                    >
                                        <Github size={20} />
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-indigo-600 transition-all duration-300 border border-white/20"
                                        title="View Demo"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                                {project.subtitle && (
                                    <div className="absolute bottom-3 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <span className="text-[9px] font-bold text-white/90 uppercase tracking-[0.2em] bg-indigo-600/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 italic">
                                            {project.subtitle}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-500 transition-colors line-clamp-2 min-h-[3.5rem]">
                                    {project.title}
                                </h3>

                                {project.points && (
                                    <ul className="space-y-2.5 mb-6 flex-grow">
                                        {project.points.map((point, pIndex) => (
                                            <li key={pIndex} className="text-gray-600 dark:text-gray-400 text-xs flex gap-2">
                                                <span className="text-indigo-500 mt-1 flex-shrink-0">•</span>
                                                <span className="leading-relaxed line-clamp-4">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800/50">
                                    {project.tech.slice(0, 6).map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-2 py-1 bg-indigo-500/5 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[9px] font-bold rounded-md border border-indigo-500/10"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tech.length > 6 && (
                                        <span className="text-[9px] font-bold text-gray-400 dark:text-gray-600 px-1 py-1">
                                            +{project.tech.length - 6}
                                        </span>
                                    )}
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
