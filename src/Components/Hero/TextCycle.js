import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const words = ["Passionate", "Dedicated", "Quick Learner", "A language agnostic developer"];

const wordVariants = {
  hidden: { opacity: 0, y: "70%", scale: 0.6 },
  visible: { opacity: 1, y: "0%", scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: "-70%", scale: 0.6, transition: { duration: 0.5 } },
};

export default function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center z-10">
        <motion.h3
          key={words[index]}
          className="absolute text-3xl md:text-3xl font-black select-none text-center z-10 "
          variants={wordVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {words[index]}
        </motion.h3>
      </div>
  );
}
