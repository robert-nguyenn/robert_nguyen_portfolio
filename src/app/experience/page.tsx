"use client"

import Header from "../components/Header"

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "DeepChatBI",
    period: "May 2025 - Present",
    location: "San Francisco, CA",
    description: "AI services for natural language to SQL translation",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Snowflake", "Redis", "Claude API"]
  },
  {
    title: "Software Engineer Intern", 
    company: "UF CSSALT",
    period: "Jan 2025 - May 2025",
    location: "Gainesville, FL",
    description: "Real-time defibrillator simulation software",
    tech: ["Unity", "C#", "Docker", "GitHub Actions", "CI/CD"]
  },
  {
    title: "Research Software Engineer",
    company: "Ecosystem AI Lab", 
    period: "Aug 2024 - Dec 2024",
    location: "Gainesville, FL",
    description: "ML research for environmental quality analysis",
    tech: ["Python", "TensorFlow", "ResNet-50", "D3.js", "Flask", "PostGIS"]
  }
]

const education = {
  degree: "B.S. in Computer Science",
  school: "University of Florida",
  period: "Aug 2023 - May 2027",
  gpa: "3.9/4.0",
  location: "Gainesville, FL",
  courses: ["Data Structures", "Operating Systems", "Computer Organization", "Discrete Math", "Linear Algebra"]
}

const leadership = {
  title: "Membership Director",
  org: "UF Computing Student Union",
  period: "Mar 2025 - Present",
  location: "Gainesville, FL",
  description: "Recruitment and retention strategies for computing club"
}

export default function Experience() {
  return (
    <div className="min-h-screen bg-black text-green-400 px-6 py-8" style={{ color: 'rgb(var(--terminal-green))' }}>
      <div className="max-w-4xl mx-auto terminal-glass p-6">
        <Header currentPath="~/experience" />
        
        <div className="space-y-8">
          {/* Work Experience */}
          <div>
            <div className="text-yellow-400 mb-3">// work experience</div>
            {experiences.map((exp, index) => (
              <div key={index} className="ml-4 mb-3">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-cyan-400 font-semibold whitespace-nowrap">{exp.title.toLowerCase()}</span>
                  <span style={{ color: 'rgb(var(--terminal-green))' }}>{exp.company}</span>
                </div>
                <div className="text-gray-400 text-sm">{exp.period.toLowerCase()} • {exp.location.toLowerCase()}</div>
                <div className="text-gray-300 text-sm mt-1">{exp.description.toLowerCase()}</div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <div className="text-yellow-400 mb-3">// education</div>
            <div className="ml-4 mb-3">
              <div className="flex flex-wrap items-baseline gap-x-2">
                <span className="text-cyan-400 font-semibold whitespace-nowrap">{education.degree.toLowerCase()}</span>
                <span style={{ color: 'rgb(var(--terminal-green))' }}>{education.school}</span>
              </div>
              <div className="text-gray-400 text-sm">{education.period.toLowerCase()} • gpa: {education.gpa} • {education.location.toLowerCase()}</div>
              <div className="text-gray-300 text-sm mt-1">
                courses: {education.courses.map(course => course.toLowerCase()).join(', ')}
              </div>
            </div>
          </div>

          {/* Leadership */}
          <div>
            <div className="text-yellow-400 mb-3">// leadership</div>
            <div className="ml-4 mb-3">
              <div className="flex flex-wrap items-baseline gap-x-2">
                <span className="text-cyan-400 font-semibold whitespace-nowrap">{leadership.title.toLowerCase()}</span>
                <span style={{ color: 'rgb(var(--terminal-green))' }}>{leadership.org}</span>
              </div>
              <div className="text-gray-400 text-sm">{leadership.period.toLowerCase()} • {leadership.location.toLowerCase()}</div>
              <div className="text-gray-300 text-sm mt-1">{leadership.description.toLowerCase()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
