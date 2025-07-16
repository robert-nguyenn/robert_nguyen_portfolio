"use client"

import Header from "../components/Header"

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Propvia",
    period: "Jun 2025 - Sep 2025",
    location: "Detroit, MI",
    description: "Implemented a multi-tenant backend on PostgreSQL with row-level security and Auth0 OAuth, powering an AI property analysis platform for 500+ users with 1k+ records/month.",
    tech: ["PostgreSQL", "Auth0", "REST API", "gRPC", "Apache Kafka", "Google Cloud Run", "Node.js"]
  },
  {
    title: "Software Engineer Intern", 
    company: "Theta Zero Consulting",
    period: "Dec 2024 - May 2025",
    location: "Lexington, KY",
    description: "Delivered a CRM SaaS for 1,100+ real-estate users, storing client data in PostgreSQL and powering React/Django frontend. Instrumented OpenTelemetry traces with Prometheus & Grafana alerts.",
    tech: ["React", "Django", "PostgreSQL", "OpenTelemetry", "Prometheus", "Grafana", "Docker"]
  },
  {
    title: "Software Engineer Intern",
    company: "Novatek Technology", 
    period: "May 2024 - Nov 2024",
    location: "hanoi, vietnam",
    description: "Enhanced checkout reliability to 99.95% on a 10k+ MAU e-commerce platform by refactoring into a stateless gRPC microservice with Kubernetes deployments using rollback strategies.",
    tech: ["gRPC", "Kubernetes", "Redis", "Lambda", "DynamoDB", "Terraform", "CI/CD", "Linux"]
  },
  {
    title: "Undergraduate Researcher",
    company: "Centre College — Computer Science Department", 
    period: "Jan 2024 - May 2024",
    location: "Danville, KY",
    description: "Processed soccer telemetry into 11k+ events/second with 98% extraction accuracy via a multithreaded Python pipeline. Optimized DuckDB for telemetry via spatial SQL queries.",
    tech: ["Python", "DuckDB", "Multithreading", "Spatial SQL", "Data Processing"]
  }
]

const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "Centre College",
  period: "Aug 2023 - May 2027",
  gpa: "3.89/4.0",
  location: "Danville, KY",
  courses: ["Data Structures and Algorithms", "Distributed Systems", "Operating Systems", "Computer Networks", "Database Systems", "Object-Oriented Programming"]
}


export default function Experience() {
  return (
    <div className="min-h-screen bg-black text-green-400 px-6 py-8 relative" style={{ color: 'rgb(var(--terminal-green))' }}>
      {/* Matrix background */}
      <div className="matrix-bg"></div>
      
      <div className="max-w-4xl mx-auto terminal-glass p-6 relative">
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

        </div>
      </div>
    </div>
  )
}
