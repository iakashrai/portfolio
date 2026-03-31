import React from "react";

const SkillCard = ({skillsType, skillsDescription}) => {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-10 items-center justify-between py-8 sm:py-12 px-4 sm:px-12 group text-gray-500 hover:text-white transition-all ease-in-out duration-500 min-h-[140px] sm:min-h-[180px] overflow-hidden relative">
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

export default SkillCard;
