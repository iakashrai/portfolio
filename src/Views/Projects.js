import { motion } from "framer-motion";
import ProjectCard from "../Components/ProjectCard/ProjectCard";

function Projects() {
    return(
        <section id="projects" className="w-full py-16 md:py-24 px-6 md:px-16 lg:px-24">
            <p className="section-label">PROJECTS</p>
            
            <motion.div
                className="mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-lg md:text-xl text-gray-400 mb-10">
                    Check out my <span className="gradient-text-port font-medium">side projects</span> below
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl">
                    <ProjectCard 
                        project_title="wCompiler"
                        project_description="A web-based Code Compiler. Features containerized execution handling high concurrent processing securely."
                        project_type="WEB APP"
                        project_url="https://github.com/iakashrai/wCompiler"
                    />
                    <ProjectCard 
                        project_title="Krafter Framework"
                        project_description="Dynamic Frontend Suite. Improved rendering speed by 35% using React.js and Tailwind CSS."
                        project_type="WEB APP" 
                        project_url="https://github.com/iakashrai/Krafter"
                    />
                    <ProjectCard 
                        project_title="JFxChess Engine"
                        project_description="A complete Desktop chess engine. Integrated OOD algorithms reducing move validation checks by 40%."
                        project_type="DESKTOP APP"
                        project_url="https://github.com/iakashrai/JFxChess"
                    />
                    <ProjectCard 
                        project_title="More Projects"
                        project_description="See My Creations"
                        project_type=""
                        project_url="https://iakashrai.github.io"
                    />
                </div>
            </motion.div>
        </section>
    )
}

export default Projects;