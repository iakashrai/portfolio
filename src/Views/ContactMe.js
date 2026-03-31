import { motion } from 'framer-motion';
import insta from '../images/instagram.svg';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import twitterx from '../images/twitterx.svg';
import leetcode from '../images/leetcode.svg';

function ContactMe() {
    const currentYear = new Date().getFullYear();

    const socialMediaLinks = [
        { id:1, name: 'LinkedIn', icon: linkedin, url: 'https://www.linkedin.com/in/iakashrai/' },
        { id:2, name: 'GitHub', icon: github, url: 'https://github.com/iakashrai' },
        { id:3, name: 'LeetCode', icon: leetcode, url: 'https://leetcode.com/akashrai02/' },
        { id:4, name: 'Instagram', icon: insta, url: 'https://www.instagram.com/iaakashrai/' },
        { id:5, name: 'Twitter / X', icon: twitterx, url: 'https://twitter.com/iakashrai2' },
    ];

    return(
        <section id="contact" className="w-full pt-20 md:pt-28 pb-0">
            {/* CTA Section */}
            <motion.div
                className="px-6 md:px-16 lg:px-24 pb-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">
                        Get in touch
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                        Let's build something{' '}
                        <span className="gradient-text-port">amazing</span>{' '}
                        together.
                    </h2>
                    <p className="text-gray-400 mt-6 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                        I'm always interested in hearing about new projects and opportunities. 
                        Whether you have a question or just want to say hi, feel free to reach out.
                    </p>

                    {/* Email CTA */}
                    <div className="mt-10">
                        <a
                            href="mailto:iamakashrai84@gmail.com"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-gray-700 hover:border-indigo-500/50 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-500 group"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 group-hover:text-indigo-400 transition-colors">
                                <rect x="2" y="4" width="20" height="16" rx="2"/>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                            </svg>
                            <span className="text-gray-300 group-hover:text-white text-sm md:text-base font-medium transition-colors">
                                iamakashrai84@gmail.com
                            </span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all duration-300">
                                <path d="M5 12h14"/>
                                <path d="m12 5 7 7-7 7"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Footer */}
            <footer className="border-t border-gray-800/50">
                <div className="px-6 md:px-16 lg:px-24 py-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        {/* Name / Brand */}
                        <div className="flex items-center gap-2">
                            <span className="text-white font-semibold text-sm tracking-wide">
                                Akash Rai
                            </span>
                            <span className="text-gray-700 text-xs">•</span>
                            <span className="text-gray-600 text-xs">
                                © {currentYear}
                            </span>
                        </div>

                        {/* Social Links */}
                        <ul className="flex items-center gap-1">
                            {socialMediaLinks.map(link => (
                                <li key={link.id}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/[0.06] transition-all duration-300 group"
                                        title={link.name}
                                    >
                                        <img
                                            src={link.icon}
                                            alt={link.name}
                                            className="w-[18px] h-[18px] opacity-40 group-hover:opacity-90 transition-opacity duration-300"
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Back to top */}
                        <a
                            href="#home"
                            className="text-xs text-gray-600 hover:text-gray-400 transition-colors flex items-center gap-1"
                        >
                            Back to top
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m18 15-6-6-6 6"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default ContactMe;