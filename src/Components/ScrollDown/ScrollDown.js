import React from 'react';
import { color, motion } from 'framer-motion';

const ScrollDownIndicator = () => {
    // bg-[#00000022] 
    // backdrop-blur-xl
  return (
    <div className='scroll-down-indicator 
                    fixed bottom-0 right-0 select-none opacity-100 hidden sm:flex items-center justify-center mx-[2%] my-8 md:my-12 z-[999] rounded-full p-2'>
        <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
            <svg viewBox="0 0 100 100" width="100" height="100" className="w-16 h-auto" style={{ opacity: 1, transform: 'scale(1) rotate(0)' }}>
                <defs>
                <path id="circle" d=" M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"></path>
                </defs>
                <text fill="white" font-size="18">
                <textPath href="#circle">scroll down • scroll down •</textPath>
                </text>
            </svg>
        </motion.div>
        <div className="absolute" style={{ opacity: 1, transform: 'none' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 text-graytransparent" style={{ '--darkreader-inline-stroke': 'currentColor' }}>
            <rect x="5" y="2" width="14" height="20" rx="7"></rect>
            <path d="M12 6v4"></path>
            </svg>
        </div>
    </div>
  );
};

export default ScrollDownIndicator;
