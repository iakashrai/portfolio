
function ProjectCard({project_title,project_description,project_type,project_url}) {
    return(
        <div className="flex flex-col relative w-full h-full md:w-[400px] md:h-[300px]" style={{opacity: 1}}>
      <div className="w-full h-full border bg-black p-12 md:p-20 gradientborder text-graytransparent z-20">
        <div className="h-full leading-7 tracking-wider font-medium flex flex-col items-start justify-center">
          <div className="flex flex-col gap-6">
            <p className="text-lg md:text-xl text-white">{project_title}</p>
            <p className="font-light text-sm text-graytransparent">{project_description}</p>
            <div className="flex flex-row gap-4">
              <p className="text-xs font-mono text-darkgray uppercase">{project_type}</p>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 p-4">
            <a aria-label="Link to view the project" href={project_url}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 text-gray hover:text-primary duration-300 transition-all ease-in-out">
                <path d="M18 8L22 12L18 16"></path>
                <path d="M2 12H22"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-full border gradientborder bg-black absolute top-[3%] left-[-2%] z-10"></div>
    </div>
    );
}

export default ProjectCard;