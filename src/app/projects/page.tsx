"use client"

import { FiGithub, FiExternalLink } from "react-icons/fi"
import Header from "../components/Header"

const projects = [
  {
    name: "resumezip.io",
    description: "LaTeX resume generator with AI-powered content suggestions",
    tech: ["Go", "Docker", "AWS ECS/S3", "PostgreSQL", "Next.js", "TypeScript", "Redis"],
    github: "https://github.com/ianhoangdev/resumezip",
    live: "https://resumezip.io"
  },
  {
    name: "neuroDB.ai",
    description: "In-browser semantic search engine using Rust/WASM",
    tech: ["SvelteKit", "Rust", "JavaScript", "WASM", "Hugging Face"],
    github: "https://github.com/ianhoangdev/neuroDB",
    live: "https://neurodbai.vercel.app"
  },
  {
    name: "BlockRaise",
    description: "Web3 crowdfunding platform with Solidity smart contracts",
    tech: ["Next.js", "Solidity", "Ethereum", "Web3.js", "TailwindCSS", "TypeScript"],
    github: "https://github.com/ianhoangdev/BlockRaise",
    live: "https://blockraise.netlify.app"
  },
  {
    name: "Wordhunt Solver",
    description: "High-speed C++ solver using trie and backtracking algorithms",
    tech: ["C++", "WebAssembly", "React", "TypeScript", "Trie Algorithm", "Backtracking"],
    github: "https://github.com/ianhoangdev/wordhuntsolver",
    live: "https://wordhuntsolver.vercel.app"
  },
  {
    name: "ML Football Analyzer",
    description: "Computer vision system to track players using YOLO object detection",
    tech: ["Python", "OpenCV", "YOLO", "TensorFlow", "NumPy", "Pandas"],
    github: "https://github.com/ianhoangdev/MLFootballAnalysis",
    live: null
  }
]

const skills = {
  languages: ["Go", "Python", "Java", "C++", "JavaScript", "TypeScript", "SQL"],
  technologies: ["React", "Next.js", "AWS", "Docker", "PostgreSQL", "MongoDB", "Spring Boot"],
  other: ["Machine Learning", "Distributed Systems", "Unity", "System Design"]
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
                <span className="text-cyan-400 font-semibold whitespace-nowrap">technologies:</span>
                <span>{skills.technologies.map(tech => tech.toLowerCase()).join(', ')}</span>
              </div>
              <div className="flex flex-wrap items-baseline gap-x-2 text-sm text-gray-300">
                <span className="text-cyan-400 font-semibold whitespace-nowrap">other:</span>
                <span>{skills.other.map(item => item.toLowerCase()).join(', ')}</span>
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
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-yellow-400 flex items-center">
                    github<FiGithub className="inline w-3 h-3 ml-1" />
                  </a>
                  {project.live && (
                    <>
                      <span className="mx-1">•</span>
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