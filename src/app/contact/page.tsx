"use client"

import { useState } from "react"
import Link from "next/link"
import { FiArrowLeft, FiMail, FiGithub, FiLinkedin, FiMessageSquare } from "react-icons/fi"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-black text-green-400 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Terminal Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-4 text-sm text-gray-400">robert@portfolio:~/contact</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="mb-8">
          <Link href="/" className="terminal-link flex items-center space-x-2">
            <FiArrowLeft className="w-4 h-4" />
            <span>cd ..</span>
          </Link>
        </div>

        {/* Contact Header */}
        <div className="terminal-section mb-12">
          <div className="command-prompt mb-2">$ cat contact.txt</div>
          <div className="command-output">
            <div className="text-2xl font-bold mb-4">Get in Touch</div>
            <p className="text-gray-400">Let's discuss opportunities, collaborations, or just say hello!</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="terminal-section mb-12">
          <div className="command-prompt mb-4">$ cat contact-info.txt</div>
          <div className="command-output">
            <div className="code-block">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FiMail className="w-5 h-5 text-cyan-400" />
                  <div>
                    <span className="text-cyan-400">Email:</span>
                    <a href="mailto:robert.nguyennh@gmail.com" className="terminal-link ml-2">
                      robert.nguyennh@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FiGithub className="w-5 h-5 text-cyan-400" />
                  <div>
                    <span className="text-cyan-400">GitHub:</span>
                    <a href="https://github.com/robert-nguyenn" target="_blank" rel="noopener noreferrer" className="terminal-link ml-2">
                  github.com/robert-nguyenn
                </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FiLinkedin className="w-5 h-5 text-cyan-400" />
                  <div>
                    <span className="text-cyan-400">LinkedIn:</span>
                    <a href="https://linkedin.com/in/robert-nguyenn" target="_blank" rel="noopener noreferrer" className="terminal-link ml-2">
                  linkedin.com/in/robert-nguyenn
                </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="terminal-section mb-12">
          <div className="command-prompt mb-4">$ nano contact-form.txt</div>
          <div className="command-output">
            {submitted ? (
              <div className="code-block">
                <div className="text-center">
                  <div className="text-green-400 text-xl mb-2">✓ Message sent successfully!</div>
                  <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="code-block">
                <div className="space-y-4">
                  <div>
                    <label className="block text-cyan-400 mb-2">Name:</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900 border border-gray-700 text-green-400 px-3 py-2 rounded focus:border-green-400 focus:outline-none font-mono"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-cyan-400 mb-2">Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900 border border-gray-700 text-green-400 px-3 py-2 rounded focus:border-green-400 focus:outline-none font-mono"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-cyan-400 mb-2">Subject:</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900 border border-gray-700 text-green-400 px-3 py-2 rounded focus:border-green-400 focus:outline-none font-mono"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-cyan-400 mb-2">Message:</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-gray-900 border border-gray-700 text-green-400 px-3 py-2 rounded focus:border-green-400 focus:outline-none font-mono resize-none"
                      placeholder="Tell me more..."
                    />
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="terminal-button flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FiMessageSquare className="w-4 h-4" />
                      <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    </button>
                    
                    <div className="text-sm text-gray-500">
                      Press Ctrl+X to save and exit
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Availability */}
        <div className="terminal-section mb-12">
          <div className="command-prompt mb-4">$ cat availability.txt</div>
          <div className="command-output">
            <div className="code-block">
              <div className="space-y-3">
                <div>
                  <span className="text-cyan-400">Status:</span>
                  <span className="text-green-400 ml-2">● Available for opportunities</span>
                </div>
                <div>
                  <span className="text-cyan-400">Response Time:</span>
                  <span className="text-gray-400 ml-2">Within 24 hours</span>
                </div>
                <div>
                  <span className="text-cyan-400">Preferred Contact:</span>
                  <span className="text-gray-400 ml-2">Email or LinkedIn</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="terminal-section">
          <div className="command-prompt mb-4">$ ls -la quick-actions/</div>
          <div className="command-output">
            <div className="code-block">
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <span className="text-yellow-400">drwxr-xr-x</span>
                  <a href="/projects" className="terminal-link">view-projects</a>
                  <span className="text-gray-400">Browse my work</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-yellow-400">drwxr-xr-x</span>
                  <a href="/experience" className="terminal-link">view-experience</a>
                  <span className="text-gray-400">See my background</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-yellow-400">-rw-r--r--</span>
                  <a href="mailto:robert.nguyennh@gmail.com" className="terminal-link">send-email</a>
                  <span className="text-gray-400">Direct email</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

