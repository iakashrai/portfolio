import React from 'react';
import Seprator from '../Components/Seprator';
import ProjectCard from '../Components/ProjectCard';

const Skills = () => {

  return (
    <section id="skills" className="skills-section text-white w-full h-full p-16">
        <h2 class="skills-heading text-[10px] text-white md:text-xs uppercase underline underline-offset-4 mx-[10%] sm:mx-[0%] p-5" style={{opacity: 1}}>SKILLS</h2>
        <div className='skills-subcontainer flex flex-col py-5'>
            <Seprator />
            <ProjectCard skillsType="Languages" 
                skillsDescription="Java,Python,Go"
            />
            <Seprator />
            <ProjectCard skillsType="Database" 
                skillsDescription="PostgreSQL, MongoDB, Redis" />
            <Seprator />
            <ProjectCard skillsType="Framework"
                skillsDescription="Spring Boot, Flask"/>
            <Seprator />
            <ProjectCard skillsType="Tools"
                skillsDescription="Git, VS Code"/>
            <Seprator />
        </div>
    </section>
  );
};

export default Skills;
