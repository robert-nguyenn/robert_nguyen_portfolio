"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from "react-icons/fi"
import { catGifs } from "./jokes"
import Header from "./components/Header"

export default function Home() {
  const [currentCommand, setCurrentCommand] = useState("")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [outputHistory, setOutputHistory] = useState<(string | React.ReactElement)[]>([])
  const [showCursor, setShowCursor] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  const [showFunFacts, setShowFunFacts] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const commands = {
    help:
      `<pre style="font-family: 'JetBrains Mono', monospace; color: #fff; margin-bottom: 0; line-height: 1.1;">
 /\\_/\\  
( o.o ) meow! here are your commands:
 > ^ <  </pre>help(<span class='text-yellow-400'>⌘+Shift+H</span>) - show help message<br>about(<span class='text-yellow-400'>⌘+A</span>) - learn about me<br>proj(<span class='text-yellow-400'>⌘+P</span>) - view my projects<br>exp(<span class='text-yellow-400'>⌘+E</span>) - see my experience<br>clear(<span class='text-yellow-400'>⌘+K</span>) - clear terminal<br>motd(<span class='text-yellow-400'>⌘+B</span>) - look at cat gif and smile`,
    about: "hi my name is robert. computer science student at centre college with a passion for building scalable software solutions. let's connect if you want to discuss tech, internships, or cool projects!",
    proj: "i build full-stack applications, trading platforms, and data-driven solutions.<br>check out my projects at <a href='/projects' class='text-cyan-400 hover:text-yellow-400'>/projects</a>",
    exp: "i've interned at propvia, theta zero consulting, novatek technology, and more.<br>view my experience at <a href='/experience' class='text-cyan-400 hover:text-yellow-400'>/experience</a>",
    clear: "clear",
    motd: "random cat gif - use the command to see a cat!",
    // Aliases for backward compatibility
    projects: "check out my projects at <a href='/projects' class='text-cyan-400 hover:text-yellow-400'>/projects</a>",
    experience: "view my experience at <a href='/experience' class='text-cyan-400 hover:text-yellow-400'>/experience</a>"
  }

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    
    if (trimmedCmd === 'clear') {
      setCommandHistory([])
      setOutputHistory([])
      setCurrentCommand("")
      return
    }
    
    let output
    if (trimmedCmd === 'motd') {
      const randomCat = catGifs[Math.floor(Math.random() * catGifs.length)]
      output = (
        <img 
          src={randomCat} 
          alt="cat gif" 
          style={{ width: '220px', maxWidth: '100%', borderRadius: '8px', marginTop: '8px' }}
          onLoad={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
        />
      )
    } else {
      // Support aliases for proj/projects and exp/experience
      let cmdKey = trimmedCmd
      if (cmdKey === 'projects') cmdKey = 'proj'
      if (cmdKey === 'experience') cmdKey = 'exp'
      output = commands[cmdKey as keyof typeof commands] || `command not found: ${trimmedCmd}. type 'help' for available commands.`
    }
    
    setCommandHistory(prev => [...prev, cmd])
    setOutputHistory(prev => [...prev, output])
    setCurrentCommand("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentCommand)
    }
  }

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    
    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    const handleGlobalKeyPress = (e: KeyboardEvent) => {
      // Only handle specific shortcuts, allow normal browser shortcuts
      if (e.metaKey || e.ctrlKey) {
        switch (e.key.toLowerCase()) {
          case 'k':
            e.preventDefault()
            e.stopPropagation()
            setCommandHistory([])
            setOutputHistory([])
            setCurrentCommand("")
            break
          case 'h':
            e.preventDefault()
            e.stopPropagation()
            handleCommand('help')
            break
          case 'a':
            e.preventDefault()
            e.stopPropagation()
            handleCommand('about')
            break
          case 'p':
            e.preventDefault()
            e.stopPropagation()
            handleCommand('proj')
            break
          case 'e':
            e.preventDefault()
            e.stopPropagation()
            handleCommand('exp')
            break
          case 'b':
            e.preventDefault()
            e.stopPropagation()
            handleCommand('motd')
            break
          // Allow other shortcuts like C (copy), V (paste), etc. to work normally
        }
      }
    }

    // Use both keydown and keyup events for better Safari compatibility
    document.addEventListener('keydown', handleGlobalKeyPress, true)
    document.addEventListener('keyup', handleGlobalKeyPress, true)
    
    return () => {
      document.removeEventListener('keydown', handleGlobalKeyPress, true)
      document.removeEventListener('keyup', handleGlobalKeyPress, true)
    }
  }, [])

  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }, [commandHistory, outputHistory])

  return (
    <div className="min-h-screen bg-black text-green-400 px-6 py-8" style={{ color: 'rgb(var(--terminal-green))' }}>
      <div className="max-w-4xl mx-auto terminal-glass p-6">
        <Header currentPath="~" showBackButton={false} />

        {/* Spacer to match back button height on other pages */}
        <div className="mb-6"></div>

        {/* Main Content */}
        <div>
          {/* Whoami Section */}
          <div className="terminal-section">
            <div className="mb-1">
              <span style={{ color: 'rgb(var(--terminal-green))' }}>guest@portfolio</span>
              <span style={{ color: 'rgb(var(--foreground-rgb))' }}>:</span>
              <span className="text-yellow-400">~</span>
              <span style={{ color: 'rgb(var(--foreground-rgb))' }}>$ </span>
              <span style={{ color: 'rgb(var(--foreground-rgb))' }}>whoami</span>
            </div>
            <div className="command-output text-2xl font-bold" style={{ color: 'rgb(var(--foreground-rgb))' }}>robert nguyen ツ</div>
          </div>

          {/* About Section */}
          <div className="terminal-section">
            <div className="mb-1">
              <span style={{ color: 'rgb(var(--terminal-green))' }}>guest@portfolio</span>
              <span style={{ color: 'rgb(var(--foreground-rgb))' }}>:</span>
              <span className="text-yellow-400">~</span>
              <span style={{ color: 'rgb(var(--foreground-rgb))' }}>$ </span>
              <span style={{ color: 'rgb(var(--foreground-rgb))' }}>cat about.txt</span>
            </div>
            <div className="command-output space-y-1" style={{ color: 'rgb(var(--foreground-rgb))' }}>
              <p><span className="text-yellow-400">&gt;</span> hi, my name is robert! i'm studying computer science at centre college</p>
              <p><span className="text-yellow-400">&gt;</span> passionate about distributed systems, databases, and building scalable solutions</p>
              <button 
                onClick={() => setShowFunFacts(!showFunFacts)}
                className="text-left transition-colors"
                style={{ color: 'rgb(var(--foreground-rgb))' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(var(--terminal-cyan))'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(var(--foreground-rgb))'}
              >
                <p><span className="text-yellow-400">&gt;</span> {showFunFacts ? '[-]' : '[+]'} some fun facts about me:</p>
              </button>
              {showFunFacts && (
                <div className="ml-8 space-y-1" style={{ color: 'rgb(var(--foreground-rgb))' }}>
                  <p><span className="text-yellow-400">&gt;</span> built a no-code quant trading platform that processes 12k+ market events</p>
                  <p><span className="text-yellow-400">&gt;</span> optimized database query latency by 60% using advanced indexing techniques</p>
                  <p><span className="text-yellow-400">&gt;</span> enjoy working with cutting-edge tech like gRPC, kubernetes, and cloud platforms</p>
                </div>
              )}
            </div>
          </div>

          {/* Current Experience Section */}
          <div className="terminal-section">
            <div className="mb-1">
              <span style={{ color: 'rgb(var(--terminal-green))' }}>guest@portfolio</span>
              <span style={{ color: 'rgb(var(--foreground-rgb))' }}>:</span>
              <span className="text-yellow-400">~</span>
              <span style={{ color: 'rgb(var(--foreground-rgb))' }}>$ </span>
              <span style={{ color: 'rgb(var(--foreground-rgb))' }}>cat exp.txt</span>
            </div>
            <div className="command-output" style={{ color: 'rgb(var(--foreground-rgb))' }}>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-yellow-400">drwxr-xr-x</span>
                  <span className="text-cyan-400">Propvia</span>
                  <span className="text-gray-400">software engineer intern (jun 2025 - sep 2025)</span>
                </div>
              </div>
              <div className="mt-1">
                <Link href="/experience" className="terminal-link">
                  <span className="text-cyan-400"></span>→ view my exp
                </Link>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="terminal-section">
            <div className="mb-1">
              <span style={{ color: 'rgb(var(--terminal-green))' }}>guest@portfolio</span>
              <span style={{ color: 'rgb(var(--foreground-rgb))' }}>:</span>
              <span className="text-yellow-400">~</span>
              <span style={{ color: 'rgb(var(--foreground-rgb))' }}>$ </span>
              <span style={{ color: 'rgb(var(--foreground-rgb))' }}>cat proj.txt</span>
            </div>
            <div className="command-output" style={{ color: 'rgb(var(--foreground-rgb))' }}>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-yellow-400">drwxr-xr-x</span>
                  <a href="https://github.com/robert-nguyenn/sphinx-no-code-quant-trading-platform" target="_blank" rel="noopener noreferrer" className="text-cyan-400">
                    sphinx trading platform<FiExternalLink className="inline w-3 h-3 ml-1" />
                   </a>
                  <span className="text-gray-400">quant trading application</span>
                </div>
              </div>
              <div className="mt-1">
                <Link href="/projects" className="terminal-link">
                  <span className="text-cyan-400"></span>→ view my proj
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="terminal-section">
            <div className="mb-1">
              <span style={{ color: 'rgb(var(--terminal-green))' }}>guest@portfolio</span>
              <span style={{ color: 'rgb(var(--foreground-rgb))' }}>:</span>
              <span className="text-yellow-400">~</span>
              <span style={{ color: 'rgb(var(--foreground-rgb))' }}>$ </span>
              <span style={{ color: 'rgb(var(--foreground-rgb))' }}>cat contact.txt</span>
            </div>
            <div className="command-output" style={{ color: 'rgb(var(--foreground-rgb))' }}>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8">
                <div>
                  <a href="mailto:robert.nguyenanh@gmail.com" className="terminal-link"> robert.nguyennh@gmail.com</a>
                </div>
                <div>
                  <a href="https://github.com/robert-nguyenn" target="_blank" rel="noopener noreferrer" className="terminal-link"> github.com/robert-nguyenn<FiExternalLink className="inline w-3 h-3" /></a>
                </div>
                <div>
                  <a href="https://linkedin.com/in/robert-nguyenn" target="_blank" rel="noopener noreferrer" className="terminal-link"> linkedin.com/in/robert-nguyenn<FiExternalLink className="inline w-3 h-3" /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Command Line */}
          <div className="terminal-section">
            {/* Command History */}
            {commandHistory.map((cmd, index) => (
              <div key={index} className="mb-2">
                <div>
                  <span style={{ color: 'rgb(var(--terminal-green))' }}>guest@portfolio</span>
                  <span style={{ color: 'rgb(var(--foreground-rgb))' }}>:</span>
                  <span className="text-yellow-400">~</span>
                  <span style={{ color: 'rgb(var(--foreground-rgb))' }}>$ </span>
                  <span style={{ color: 'rgb(var(--foreground-rgb))' }}>{cmd}</span>
                </div>
                <div className="command-output" style={{ color: 'rgb(var(--foreground-rgb))' }}>
                  {typeof outputHistory[index] === 'string'
                    ? <span dangerouslySetInnerHTML={{ __html: outputHistory[index] as string }} />
                    : outputHistory[index]}
                </div>
              </div>
            ))}
            
            {/* Current Input */}
            <div className="flex items-center flex-wrap">
              <span style={{ color: 'rgb(var(--terminal-green))' }}>guest@portfolio</span>
              <span style={{ color: 'rgb(var(--foreground-rgb))' }}>:</span>
              <span className="text-yellow-400">~</span>
              <span style={{ color: 'rgb(var(--foreground-rgb))' }}>$ </span>
              <input
                ref={inputRef}
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                onKeyPress={handleKeyPress}
                className="bg-transparent border-none outline-none flex-1 focus:outline-none focus:ring-0 ml-2"
                style={{ color: 'rgb(var(--foreground-rgb))' }}
                placeholder="type `help` for available commands"
              />
            </div>
          </div>

          {/* Social Links and Connected Status */}
          <div className="flex space-x-6 mt-12">
            <a href="https://github.com/robert-nguyenn" target="_blank" rel="noopener noreferrer" className="terminal-link">
              <FiGithub className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/robert-nguyenn" target="_blank" rel="noopener noreferrer" className="terminal-link">
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a href="mailto:robert.nguyennh@gmail.com" className="terminal-link">
              <FiMail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}