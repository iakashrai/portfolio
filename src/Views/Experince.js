import React from "react";
import { motion } from "framer-motion";
import MarqueeComponent from "../Components/Marquee";
import award1 from '../images/award-1.svg';
import award2 from '../images/award-2.svg';
import award3 from '../images/award-3.svg';
import award4 from '../images/award-4.svg';

function Experince() {
    const row1 = [
        {id:1, src:award1},
        {id:2, src:award2},
        {id:3, src:award3},
        {id:4, src:award4}
    ];
    
    return (
        <section id="experience" className="w-full py-16 md:py-24 px-6 md:px-16 lg:px-24">
            <p className="section-label">EXPERIENCE</p>
            
            <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="gradient-line w-full" />
                <p className="text-center text-sm md:text-base text-gray-400 py-6 tracking-wide">
                    2+ years of experience in building epic stuff
                </p>

                {/* Mobile awards grid */}
                <div className="grid grid-cols-2 gap-4 md:hidden px-4 pb-6">
                    {row1.map((award) => (
                        <div key={award.id} className="border border-gray-800 rounded-lg p-4 flex items-center justify-center">
                            <img src={award.src} alt={`Award ${award.id}`} className="max-w-full h-auto" />
                        </div>
                    ))}
                </div>

                {/* Desktop marquee */}
                <MarqueeComponent />
                
                <div className="gradient-line w-full" />
            </motion.div>
        </section>
    )
}

export default Experince;
