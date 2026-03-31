
function ProjectCard({project_title, project_description, project_type, project_url}) {
    return(
        <a href={project_url} target="_blank" rel="noopener noreferrer" className="block group">
            <div className="relative border border-gray-800/80 rounded-xl p-6 sm:p-8 md:p-10 bg-black hover:border-indigo-500/20 transition-all duration-500 hover:bg-white/[0.02]">
                {/* Tag */}
                {project_type && (
                    <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-gray-600 border border-gray-800 rounded-full px-3 py-1 mb-5">
                        {project_type}
                    </span>
                )}

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                    {project_title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    {project_description}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-gray-600 group-hover:text-indigo-400 transition-all duration-300">
                    <span className="text-xs font-medium uppercase tracking-wider">View Project</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1.5 transition-transform duration-300">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                    </svg>
                </div>
            </div>
        </a>
    );
}

export default ProjectCard;