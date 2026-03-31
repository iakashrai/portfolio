import { motion } from "framer-motion";

function About() {
    return(
        <section id="about" className="w-full py-16 md:py-24 px-6 md:px-16 lg:px-24">
            <div className="max-w-4xl mx-auto md:mx-0">
                <p className="section-label">ABOUT</p>
                <motion.div
                    className="mt-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light text-gray-300 leading-snug md:leading-tight">
                        Intrigued by technology from a young age,
                        I've always been the one to tinker and explore.
                        I'm constantly on the lookout for opportunities
                        to transform{' '}
                        <span className="gradient-text-port font-medium">
                            challenges into solutions.
                        </span>
                    </p>
                </motion.div>
            </div>
        </section> 
    )
}

export default About;