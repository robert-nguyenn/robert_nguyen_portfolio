"use client"

import { FiGithub, FiExternalLink } from "react-icons/fi"
import Header from "../components/Header"

const projects = [
  {
    name: "Sphere — No-Code Quant Trading Platform",
    description: "A drag-and-drop application for creating, backtesting, and paper-trading strategies using RAG to merge with 12k+ geopolitical events into trade signals",
    tech: ["TypeScript", "Python", "Docker", "K8s", "Redis Streams", "Prisma", "gRPC/WebSocket"],
    github: "https://github.com/robert-nguyenn/sphinx-no-code-quant-trading-platform",
    live: null
  },
  {
    name: "Distributed Task Scheduler",
    description: "Event-driven Node.js backend with distributed messaging using RAG & LLMs, PostgreSQL, processing 12k+ market events while handling sub-300 ms latency",
    tech: ["Node.js", "PostgreSQL", "Redis", "Docker", "Kubernetes", "Event-driven Architecture"],
    github: null,
    live: null
  },
]

const skills = {
  languages: ["Python", "Java", "C++", "TypeScript", "JavaScript", "SQL", "Go", "Bash"],
  frameworks: ["PostgreSQL", "DynamoDB", "MongoDB", "Redis", "Kafka", "RabbitMQ", "Amazon SQS", "Pinecone"],
  technologies: ["gRPC", "REST", "GraphQL", "Protocol Buffers", "Node.js", "Spring Boot", "Express", "FastAPI", "Prisma ORM", "Hibernate", "Supabase", "Apache Spark"],
  cloud: ["Amazon Web Services", "Google Cloud Run", "Kubernetes", "Docker", "Terraform", "CI/CD", "Linux", "Git", "Postman", "CUDA"]
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-green-400 px-6 py-8" style={{ color: 'rgb(var(--terminal-green))' }}>
      <div className="max-w-4xl mx-auto terminal-glass p-6">
        <Header currentPath="~/projects" />
        
        <div className="space-y-8">
          {/* Skills */}
          <div>
            <div className="text-yellow-400 mb-3">// technical skills</div>
            <div className="ml-4 space-y-1">
              <div className="flex flex-wrap items-baseline gap-x-2 text-sm text-gray-300">
                <span className="text-cyan-400 font-semibold whitespace-nowrap">languages:</span>
                <span>{skills.languages.map(lang => lang.toLowerCase()).join(', ')}</span>
              </div>
              <div className="flex flex-wrap items-baseline gap-x-2 text-sm text-gray-300">
                <span className="text-cyan-400 font-semibold whitespace-nowrap">frameworks:</span>
                <span>{skills.frameworks.map(tech => tech.toLowerCase()).join(', ')}</span>
              </div>
              <div className="flex flex-wrap items-baseline gap-x-2 text-sm text-gray-300">
                <span className="text-cyan-400 font-semibold whitespace-nowrap">technologies:</span>
                <span>{skills.technologies.map(tech => tech.toLowerCase()).join(', ')}</span>
              </div>
              <div className="flex flex-wrap items-baseline gap-x-2 text-sm text-gray-300">
                <span className="text-cyan-400 font-semibold whitespace-nowrap">cloud & devops:</span>
                <span>{skills.cloud.map(item => item.toLowerCase()).join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <div className="text-yellow-400 mb-3">// projects</div>
            {projects.map((project, index) => (
              <div key={index} className="ml-4 mb-3">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-cyan-400 font-semibold whitespace-nowrap">{project.name.toLowerCase()}</span>
                  <span className="text-gray-300 text-sm">- {project.description.toLowerCase()}</span>
                </div>
                <div className="text-gray-400 text-xs mt-1">
                  tech: {project.tech.map(tech => tech.toLowerCase()).join(', ')}
                </div>
                <div className="text-gray-400 text-xs mt-1 flex flex-wrap items-center gap-x-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-yellow-400 flex items-center">
                      github<FiGithub className="inline w-3 h-3 ml-1" />
                    </a>
                  )}
                  {project.live && (
                    <>
                      {project.github && <span className="mx-1">•</span>}
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-yellow-400 flex items-center">
                        live<FiExternalLink className="inline w-3 h-3 ml-1" />
                      </a>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}