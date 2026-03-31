import { motion } from "framer-motion";
import TextCycle from "./TextCycle";

const Hero = () => (
  <motion.div className="hero flex flex-col items-center text-white"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <div className="textContainer flex flex-col items-center gap-3">
      <h1 className="font-extrabold text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight"
        style={{
          background: 'linear-gradient(135deg, #818cf8, #6366f1, #a78bfa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        AKASH RAI
      </h1>
      <h2 className="font-medium text-lg sm:text-xl md:text-3xl text-gray-300 tracking-wide">
        Software Developer
      </h2>
    </div>
    <motion.div className="animated-message pt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <TextCycle />
    </motion.div>
  </motion.div>
);

export default Hero;
