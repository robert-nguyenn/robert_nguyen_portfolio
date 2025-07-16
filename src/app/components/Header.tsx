"use client"

import Link from "next/link"
import { FiArrowLeft, FiMinus, FiSquare, FiX } from "react-icons/fi"
import { useState, useEffect } from "react"

interface HeaderProps {
  currentPath: string
  showBackButton?: boolean
}

export default function Header({ currentPath, showBackButton = true }: HeaderProps) {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* Terminal Header with window controls */}
      <div className="flex items-center justify-between mb-4 p-3 bg-gradient-to-r from-gray-800 to-gray-900 rounded-t-lg border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 cursor-pointer transition-colors"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 cursor-pointer transition-colors"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 cursor-pointer transition-colors"></div>
          </div>
          <span className="text-sm font-semibold" style={{ color: 'rgb(var(--terminal-dim-white))' }}>
            Terminal — robert@portfolio: {currentPath}
          </span>
        </div>
        
        {/* Terminal info */}
        <div className="flex items-center space-x-4 text-xs" style={{ color: 'rgb(var(--terminal-dim-white))' }}>
          <span>Shell: zsh</span>
          <span>{currentTime.toLocaleTimeString()}</span>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Online</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      {showBackButton && (
        <div className="mb-6">
          <Link href="/" className="terminal-link flex items-center space-x-2 group">
            <FiArrowLeft className="w-4 h-4 group-hover:translate-x-[-2px] transition-transform" />
            <span>cd ..</span>
          </Link>
        </div>
      )}
    </>
  )
}