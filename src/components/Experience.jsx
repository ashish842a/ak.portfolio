import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: 'AI Engineer',
            company: 'Defence Research and Development Organisation (DRDO)',
            period: 'Jul 2025 - Present',
            description: 'AI Engineer focused on automating manual processes using AI. Working on Chatbots. Skills: LLMs, RAG, Vector Embeddings, Vector Searching, Python, Flask.',
        },
        {
            role: 'Full Stack AI Engineer',
            company: 'Defence Research and Development Organisation (DRDO)',
            period: 'Dec 2023 - Jun 2025',
            description: 'Automated Intelligent Document Processing Tool for Verification. Utilized NLP, LLM, OCR (Tesseract, EasyOCR), RAG, and GANs for image enhancement. Applied ML to optimize data validation and streamlined document processing workflows.',
        },
        {
            role: 'Full Stack Developer',
            company: 'Innobimbinfotech',
            period: 'Jul 2023 - Dec 2023',
            description: 'Developed a dynamic Property Management System and a Hackathon platform using Node.js, EJS, and MongoDB. Built a React-based admin dashboard for monitoring gas concentration.',
        },
    ];

    return (
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Work Experience
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"
                    />
                </div>

                <div className="relative border-l-2 border-indigo-200 dark:border-indigo-900 ml-4 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute top-0 left-[-9px] bg-white dark:bg-gray-900 border-4 border-indigo-500 w-4 h-4 rounded-full" />

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                        <Briefcase size={20} className="text-indigo-500" />
                                        {exp.role}
                                    </h3>
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                                        <Calendar size={16} className="mr-2" />
                                        {exp.period}
                                    </div>
                                </div>
                                <h4 className="text-md font-semibold text-indigo-600 dark:text-indigo-400 mb-3">{exp.company}</h4>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
