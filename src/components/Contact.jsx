import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        // Replace these with your actual EmailJS Service ID, Template ID, and Public Key
        // You can get these from https://dashboard.emailjs.com/
        const serviceId = 'service_1iwus5v';
        const templateId = 'template_u7434ih';
        const autoReplyTemplateId = 'template_u7434ih'; // Ideally this should be a different template ID
        const publicKey = 'xUuo7uvIpk7jh35W1';

        // 1. Send Auto-Reply to User (using form data where email = user's email)
        emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
            .then((result) => {
                // 2. Send Notification to Admin (Ashish)
                // We reuse the same template but override the 'email' field to send to the admin
                const templateParams = {
                    name: formRef.current.name.value,
                    email: formRef.current.email.value, // This shows up in the body as the sender
                    title: formRef.current.title.value,
                    message: formRef.current.message.value,
                    // IMPORTANT: The template must use {{to_email}} or {{email}} in the "To" field for this to work
                    // We are forcing this email to go to you (Admin)
                    to_email: 'ashishkumar0842a@gmail.com',
                    // If your template uses {{email}} for the recipient, we need to override it here:
                    // 'email': 'ashishkumar0842a@gmail.com' 
                };

                // Note: We are attempting to send to Admin here. 
                // If the template uses `{{email}}` for the recipient, we might need to swap the email variable.
                // Assuming your template maps `email` to Recipient:
                const adminParams = {
                    ...templateParams,
                    email: 'ashishkumar0842a@gmail.com', // Force recipient to be Admin
                    from_name: formRef.current.name.value, // Preserve original sender name in body if used
                    message_from: formRef.current.email.value // Custom field to show who sent it
                };

                return emailjs.send(serviceId, autoReplyTemplateId, adminParams, publicKey);
            })
            .then(() => {
                setLoading(false);
                setStatus('success');
                formRef.current.reset();
                setTimeout(() => setStatus(null), 5000);
            })
            .catch((error) => {
                setLoading(false);
                setStatus('error');
                console.error('FAILED...', error.text);
            });
    };

    return (
        <section id="contact" className="py-20 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Get In Touch
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Let's Talk About Your Project
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                            I'm always interested in hearing about new projects and opportunities.
                            Whether you have a question or just want to say hi, feel free to drop a message!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full text-indigo-600 dark:text-indigo-400">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                                    <p className="text-gray-600 dark:text-gray-400">ashishkumar0842a@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full text-indigo-600 dark:text-indigo-400">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                                    <p className="text-gray-600 dark:text-gray-400">New Delhi, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        ref={formRef}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 dark:bg-gray-700/50 p-8 rounded-2xl shadow-lg relative"
                        onSubmit={handleSubmit}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-gray-900 dark:text-white"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-gray-900 dark:text-white"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                            <input
                                type="text"
                                name="title"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-gray-900 dark:text-white"
                                placeholder="Project Inquiry"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                            <textarea
                                name="message"
                                required
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-gray-900 dark:text-white resize-none"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-colors shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <>
                                    <Loader2 size={20} className="animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send size={20} />
                                    Send Message
                                </>
                            )}
                        </button>

                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg flex items-center gap-2"
                            >
                                <CheckCircle size={20} />
                                Message sent successfully! I'll get back to you soon.
                            </motion.div>
                        )}

                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-4 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg flex items-center gap-2"
                            >
                                <AlertCircle size={20} />
                                Failed to send message. Please try again later.
                            </motion.div>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
