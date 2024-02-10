import { motion } from "framer-motion";
import TextCycle from "./TextCycle";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  transition:{ease:"linear",
            duration: 5,
            }
};

const scrollAnimation = {
  hidden: { opacity: 0, y: -200 },
  visible: { opacity: 1, y: 0 }
};

const Hero = () => (
  <motion.div className="hero flex flex-col items-center text-white"
    initial="hidden"
    animate="visible"
    variants={fadeIn}
  >
    <motion.div className="textContainer flex flex-col items-center"
      variants={scrollAnimation}
    >
      <h1 className="font-extrabold text-purple-700 text-4xl md:text-8xl">AKASH RAI</h1>
      <h2 className="font-semibold text-2xl md:text-5xl">Software Developer</h2>
    </motion.div>
    <motion.div className="animated-message pt-8"
      variants={scrollAnimation}
    >
      <TextCycle />
    </motion.div>
  </motion.div>
);

export default Hero;
