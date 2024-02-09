import React from "react";

const ProjectCard = ({skillsType,skillsDescription}) => {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-10 items-center justify-between py-12 px-12 group text-gray-500 hover:text-white transition-all ease-in-out duration-500 min-h-[180px] overflow-hidden">
      <div className="absolute top-0 sm:top-auto left-1/2 translate-x-[-50%] bg-gradient-to-r from-blue-300 to-blue-500 z-0 pointer-events-none origin-center" style={{width: "0%", height: "0%"}}></div>
      <div className="absolute z-0 pointer-events-none flex items-center justify-center w-full translate-x-[-4%]">
        <div className="bg-black rounded-full absolute" style={{width:"0px", height:"0px"}}></div>
        <div className="bg-black rounded-full absolute" style={{width:"0px", height:"0px"}}></div>
        <div className="bg-black rounded-full absolute" style={{width:"0px", height:"0px"}}></div>
      </div>
      <div className="h-[1px] absolute top-0 left-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent w-full"></div>
      <div className="flex relative overflow-hidden text-center text-[1rem] uppercase gap-[0.1rem] font-semibold text-white" style={{opacity: 1}}>
            {skillsType}
      </div>
      <div className="w-full sm:w-1/2 flex flex-row gap-2 flex-wrap text-sm font-light font-mono text-center sm:text-justify z-10" style={{opacity: 1}}>
        <p className="w-full">{skillsDescription}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
