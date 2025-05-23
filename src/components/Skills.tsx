import { useState } from 'react'

type SkillCategory = 'frontend' | 'backend'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('frontend')

  const skills: Record<SkillCategory, Array<{name: string, icon: string, level: number}>> = {
    frontend: [
      { name: 'React', icon: '⚛️', level: 90 },
      { name: 'TypeScript', icon: '🔷', level: 85 },
      { name: 'JavaScript', icon: '🟨', level: 95 },
      { name: 'HTML/CSS', icon: '🌐', level: 100 }
    ],
    backend: [
      { name: 'Node.js', icon: '🟢', level: 85 },
      { name: 'Express', icon: '🚀', level: 80 }
    ]
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Skills</h2>
      
      {/* Category buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        {(Object.keys(skills) as SkillCategory[]).map((category) => (
          <button
            key={category}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeCategory === category 
                ? 'bg-primary text-primary-foreground shadow-lg' 
                : 'bg-muted text-foreground hover:bg-card'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills[activeCategory].map((skill: {name: string, icon: string, level: number}) => (
          <div key={skill.name} className="bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-neutral-700">
            {/* Skill header */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-2xl">
                  {skill.icon}
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                  <span className="text-sm font-bold text-primary">{skill.level}%</span>
                </div>
              </div>
            </div>

            {/* Progress bar - 使用內聯樣式確保顯示 */}
            <div style={{ width: '100%', marginTop: '8px' }}>
              <div style={{
                width: '100%',
                height: '12px',
                backgroundColor: 'rgb(51, 65, 85)', // neutral-700 equivalent
                borderRadius: '9999px',
                overflow: 'hidden',
                border: '1px solid rgb(71, 85, 105)' // border for visibility
              }}>
                <div style={{
                  height: '100%',
                  background: 'linear-gradient(to right, rgb(99, 102, 241), rgb(6, 182, 212))', // primary to accent
                  borderRadius: '9999px',
                  width: `${skill.level}%`,
                  transition: 'width 1s ease-out',
                  minWidth: skill.level > 0 ? '2px' : '0' // 確保有最小寬度
                }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills