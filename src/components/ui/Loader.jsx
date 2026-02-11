import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            <div className="relative z-10 flex flex-col items-center justify-center">
                {/* SVG Container */}
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Outer Hexagon / Shape path drawing */}
                    <motion.path
                        d="M60 5L115 35V85L60 115L5 85V35L60 5Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />

                    {/* Inner Content */}
                    <motion.text
                        x="50%"
                        y="55%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fill="white"
                        fontFamily="sans-serif"
                        fontWeight="bold"
                        fontSize="32"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        AK
                    </motion.text>
                </svg>

                {/* Subtle loading line */}
                <div className="w-32 h-[1px] bg-gray-800 mt-8 overflow-hidden">
                    <motion.div
                        className="h-full bg-white"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            ease: "easeInOut"
                        }}
                    />
                </div>

                <motion.p
                    className="text-gray-500 text-xs tracking-[0.3em] mt-4 uppercase font-light"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    Loading
                </motion.p>
            </div>

            {/* Background ambient glow - very subtle */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/10 to-purple-900/10 pointer-events-none" />
        </div>
    );
};

export default Loader;
