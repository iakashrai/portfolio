import { useState } from 'react';
import { motion } from 'framer-motion';
import '../Navbar/Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () =>{ 
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    return (
        <nav className="navbar container md:p-4 flex flex-row md:text-2xl">
            <h1 className="logo-text text text-white">
                <a href="https://iakashrai.github.io">
                    <span className="blink">{'<'}</span> Akash <span className="blink">{'/>'}</span>
                </a>
            </h1>

            <div className='resume-navmenu-wrapper flex flex-row items-center justify-around space-x-2'>
                <div className='resume-button md:text-xl text-green-400'>
                    <a href="YOUR_GDRIVE_RESUME_LINK" 
                    style={{
                        background: 'transparent',
                        border: '1px solid green',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        padding:'5px',
                        textAlign:'center'
                        }}>
                        Resume
                    </a>
                </div>

                <div className='navbar-default-menu flex flex-row space-x-1 md:text-xl text-white'>
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
                    <motion.div className="menu h-screen w-screen z-1000 overflow-hidden" initial="closed" animate="open" variants={menuVariants}>
                        <a href="#home" onClick={toggleOpen}>Home</a>
                        <a href="#about" onClick={toggleOpen}>About</a>
                        <a href="#experience" onClick={toggleOpen}>Experience</a>
                        <a href="#projects" onClick={toggleOpen}>Projects</a>
                        <a href="#skills" onClick={toggleOpen}>Skills</a>
                        <a href="#contact" onClick={toggleOpen}>Contact</a>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}

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
