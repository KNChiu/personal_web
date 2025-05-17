import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 bg-gray-300 relative">
        {/* 這裡可放置專案圖片 */}
        <div className="h-full w-full flex items-center justify-center text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              查看專案
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
            >
              查看原始碼
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "電子商務網站",
      description: "使用 React 和 Node.js 建立的電子商務平台，包含商品管理、購物車和付款功能。",
      image: "",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://example.com/ecommerce",
      githubUrl: "https://github.com/username/ecommerce",
    },
    {
      id: 2,
      title: "天氣應用程式",
      description: "串接 OpenWeatherMap API 的 React 天氣應用，提供各地即時天氣資訊與預報。",
      image: "",
      tags: ["React", "API", "TailwindCSS"],
      liveUrl: "https://example.com/weather-app",
      githubUrl: "https://github.com/username/weather-app",
    },
    {
      id: 3,
      title: "任務管理系統",
      description: "具備拖放功能的看板式任務管理工具，幫助使用者組織工作流程。",
      image: "",
      tags: ["React", "TypeScript", "Firebase"],
      liveUrl: "https://example.com/task-manager",
      githubUrl: "https://github.com/username/task-manager",
    },
    {
      id: 4,
      title: "部落格平台",
      description: "使用 MERN 堆疊建立的部落格平台，具有文章發布、編輯和評論功能。",
      image: "",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      liveUrl: "https://example.com/blog-platform",
      githubUrl: "https://github.com/username/blog-platform",
    },
  ];

  const [filter, setFilter] = useState<string>("all");
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">作品集</h2>
        
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          <button 
            className={`px-4 py-2 text-sm rounded-full transition ${filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            onClick={() => setFilter("all")}
          >
            全部
          </button>
          {allTags.map((tag, index) => (
            <button 
              key={index}
              className={`px-4 py-2 text-sm rounded-full transition ${filter === tag ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
