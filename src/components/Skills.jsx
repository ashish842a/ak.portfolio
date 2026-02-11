import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Server, Code, Wrench } from 'lucide-react';

import skillsData from '../data/skills.json';

const Skills = () => {
    // Map string icon names to actual components
    const iconMap = {
        Brain: <Brain className="text-purple-500" size={24} />,
        Server: <Server className="text-indigo-500" size={24} />,
        Code: <Code className="text-blue-500" size={24} />,
        Wrench: <Wrench className="text-pink-500" size={24} />
    };

    const skillCategories = skillsData.map(category => ({
        ...category,
        icon: iconMap[category.icon] || <Code size={24} /> // Fallback icon
    }));

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Technical Skills
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 border-t-4 border-indigo-500 group"
                        >
                            <div className="mb-4 flex justify-center">
                                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                    {category.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {category.title}
                            </h3>
                            <motion.ul
                                className="space-y-3"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.li
                                        key={skillIndex}
                                        variants={itemVariants}
                                        className="flex items-center text-gray-600 dark:text-gray-300"
                                    >
                                        <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 group-hover:bg-indigo-600 transition-colors" />
                                        {skill}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
