import ProjectCard from "../Components/ProjectCard/ProjectCard";

function Projects() {

    return(
    <section className='projects flex items-center justify-center
        '>
        <div className="project-main-container flex flex-col gap-4 text-white p-16 w-full overflow-hidden
        ">
            <h2 class="text-[10px] md:text-xs text-gray uppercase underline underline-offset-4 px-5" style={{opacity: 1}}>Projects</h2>
            <div className="inner-text-block flex items-center justify-center flex-col gap-5 p-5">
                <h2 className="inner-text">
                    Check out my <span className="text-blue-700">side projects</span> below
                </h2>
                <div className="project-group-container flex flex-col gap-5" >
                    <ProjectCard project_title="wCompiler"
                     project_description="
                        A web based Code Compiler
                     "
                     project_type="WEB APP"
                     project_url="https://iakashrai.github.io"
                     />

                    <ProjectCard project_title="URL Shortner"
                     project_description="
                        A URL Shortner Service like Tiny URL
                     "
                     project_type="Multi-Platform App" 
                     project_url="https://iakashrai.github.io"
                     />

                    <ProjectCard project_title="JFxChess"
                     project_description="
                        A JVM Based Chess Game
                     "
                     project_type="Mult-Platform App"
                     project_url="https://iakashrai.github.io"
                     />

                    <ProjectCard project_title="More Projects"
                     project_description="
                        See My Creations
                     "
                     project_type=""
                     project_url="https://iakashrai.github.io"
                     />
                </div>
            </div>
        </div>
    </section>
    )
}


export default Projects;