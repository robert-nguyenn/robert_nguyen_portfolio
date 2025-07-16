"use client"

import Link from "next/link"
import { FiArrowLeft } from "react-icons/fi"

interface HeaderProps {
  currentPath: string
  showBackButton?: boolean
}

export default function Header({ currentPath, showBackButton = true }: HeaderProps) {
  return (
    <>
      {/* Terminal Header */}
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="ml-4 text-sm text-gray-400">ian@portfolio:{currentPath}</span>
      </div>

      {/* Navigation */}
      {showBackButton && (
        <div className="mb-6">
          <Link href="/" className="terminal-link flex items-center space-x-2">
            <FiArrowLeft className="w-4 h-4" />
            <span>cd ..</span>
          </Link>
        </div>
      )}
    </>
  )
} 