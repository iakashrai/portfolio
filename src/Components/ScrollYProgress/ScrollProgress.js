import { motion, useScroll } from "framer-motion"

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div style={{ scaleX: scrollYProgress }} />  
  )
}

export default ScrollProgress;