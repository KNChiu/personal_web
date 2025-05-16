import React from 'react';

const SkillBar: React.FC<{ name: string; level: number }> = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillCategory: React.FC<{
  title: string;
  skills: { name: string; level: number }[];
}> = ({ title, skills }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      {skills.map((skill, index) => (
        <SkillBar key={index} name={skill.name} level={skill.level} />
      ))}
    </div>
  );
};

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'TailwindCSS', level: 85 },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 75 },
    { name: 'Express', level: 70 },
    { name: 'MongoDB', level: 65 },
    { name: 'SQL', level: 60 },
  ];

  const toolsSkills = [
    { name: 'Git', level: 90 },
    { name: 'Webpack', level: 75 },
    { name: 'Docker', level: 60 },
    { name: 'CI/CD', level: 65 },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">技能</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <SkillCategory title="前端技術" skills={frontendSkills} />
          <SkillCategory title="後端技術" skills={backendSkills} />
          <SkillCategory title="工具與平台" skills={toolsSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills; 