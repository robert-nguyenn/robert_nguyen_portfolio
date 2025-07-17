"use client"

import Header from "../components/Header"

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "propvia",
    period: "Jun 2025 - Sep 2025",
    location: "Detroit, MI",
    description: "Built multi-tenant backend on PostgreSQL with Auth0 OAuth, powering AI property platform for 3,000+ enterprise users. Developed RAG engine using OpenAI GPT API and Pinecone, delivering 50k+ personalized recommendations/month with 40% latency reduction.",
    tech: ["PostgreSQL", "Auth0", "REST API", "gRPC", "Apache Kafka", "Google Cloud Run", "Node.js", "OpenAI", "Pinecone", "Redis"]
  },
  {
    title: "Software Engineer Intern", 
    company: "theta zero consulting",
    period: "Dec 2024 - May 2025",
    location: "Lexington, KY",
    description: "Delivered CRM SaaS for 1,100+ tattoo-studio users, driving $20k+ monthly recurring revenue. Reduced API latency 61% and implemented monitoring with OpenTelemetry, cutting error detection time by 83%.",
    tech: ["React", "Django", "PostgreSQL", "OpenTelemetry", "Prometheus", "Grafana", "Docker", "GitLab CI/CD", "Terraform", "Linux"]
  },
  {
    title: "Software Engineer Intern",
    company: "novatek technology", 
    period: "May 2024 - Nov 2024",
    location: "Hanoi, Vietnam",
    description: "Enhanced checkout reliability to 99.95% on 10k+ MAU e-commerce platform using stateless gRPC microservices. Reduced cloud costs 22% ($3k/month) by migrating to Fargate Spot and optimizing AWS infrastructure.",
    tech: ["gRPC", "Kubernetes", "Redis", "Lambda", "DynamoDB", "Terraform", "CI/CD", "Linux", "AWS", "ECS", "RDS", "Aurora"]
  },
  {
    title: "Undergraduate Researcher",
    company: "centre college — cs department", 
    period: "Jan 2024 - May 2024",
    location: "Danville, KY",
    description: "Processed soccer telemetry into 11k+ events/second with 98% accuracy via multithreaded Python pipeline. Optimized BigQuery ETL, cutting query latency 60% and storage costs 30%.",
    tech: ["Python", "BigQuery", "Multithreading", "SQL", "Machine Learning", "Data Processing"]
  }
]

const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "centre college",
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
        <Header currentPath="~/experience" showBackButton={true} />
        
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
