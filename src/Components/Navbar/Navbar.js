import { useState } from 'react';
import { motion } from 'framer-motion';
// import download from 'downloadjs';
import '../Navbar/Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    // const downloadResume = async () => {
    //     try {
    //       const response = await fetch('../../Documents/ResumeNew.pdf');
    //       const blob = await response.blob();
    //       download(blob, 'resume.pdf');
    //     } catch (error) {
    //       console.error('An error occurred while downloading the resume:', error);
    //     }
    //   };

    return (
        <nav className="navbar container p-4 flex text-2xl">
            <h1 className="logo-text text-white">
                <a href="https://iakashrai.github.io">
                    <span className="blink">{'<'}</span> Akash <span className="blink">{'/>'}</span>
                </a>
            </h1>

            {/* <div className='resume-button'>
                <button
                    style={{
                    background: 'transparent',
                    border: '1px solid green',
                    borderRadius: '5px',
                    cursor: 'pointer'
                    }}
                    onClick={downloadResume}
                >
                    Download Resume
                </button>
            </div> */}

            <div className='navbar-default-menu flex gap-4 text-white'>
                <div className='nav-link'>
                    <a href="#home">Home</a>
                </div>
                <div className='nav-link'>
                    <a href="#experience">Experience</a>
                </div>
                <div className='nav-link'>
                    <a href="#about">About</a>
                </div>
                <div className='nav-link'>
                    <a href="#skills">Skills</a>
                </div>
                <div className='nav-link'>
                    <a href="#contact">Contact</a>
                </div>
            </div>
            
            <motion.div
                className="hamburger"
                onClick={toggleOpen}
                initial={false}
                animate={isOpen ? "open" : "closed"}
            >
                <svg width="23" height="23" viewBox="0 0 23 23">
                    <motion.path strokeWidth="3" stroke="white" strokeLinecap="round"
                        variants={{
                            closed: {d:"M 2 2.5 L 20 2.5"},
                            open:{d:"M 3 16.5 L 17 2.5"},
                        }} 
                    />
                    <motion.path strokeWidth="3" stroke="white" strokeLinecap="round"
                        d="M 2 9.423 L 20 9.423"
                        variants={{
                            closed: {opacity:1},
                            open:{opacity:0},
                        }} 
                    />
                    <motion.path strokeWidth="3" stroke="white" strokeLinecap="round"
                        variants={{
                            closed: {d:"M 2 16.346 L 20 16.346"},
                        open:{d:"M 3 2.5 L 17 16.346"},
                        }}
                    />
                    </svg>
            </motion.div>
            {isOpen && (
                <motion.div className="menu h-screen w-screen z-999" initial="closed" animate="open" variants={menuVariants}>
                    <a href="#home">Home</a>
                    <a href="#experience">Experience</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </motion.div>
            )}
        </nav>
    );
}

// const variants = {
//     open: {
//         rotate: 45,
//         translateY: -2,
//         transition: {
//             type: 'spring',
//             stiffness: 260,
//             damping: 20
//         }
//     },
//     closed: {
//         rotate: 0,
//         translateY: 0,
//         transition: {
//             damping: 20
//         }
//     },
//     cross: {
//         rotate: 90,
//         transition: {
//             type: 'spring',
//             stiffness: 260,
//             damping: 20
//         }
//     }
// };

const menuVariants = {
    open: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    },
    closed: {
        opacity: 0
    }
};

export default Navbar;
