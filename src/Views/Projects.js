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
                        project_description="A web based Code Compiler"
                        project_type="WEB APP"
                        project_url="https://iakashrai.github.io"
                    />
                    <ProjectCard 
                        project_title="URL Shortner"
                        project_description="A URL Shortner Service like Tiny URL"
                        project_type="Multi-Platform App" 
                        project_url="https://iakashrai.github.io"
                    />
                    <ProjectCard 
                        project_title="JFxChess"
                        project_description="A JVM Based Chess Game"
                        project_type="Multi-Platform App"
                        project_url="https://iakashrai.github.io"
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