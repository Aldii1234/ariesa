'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useState } from 'react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">My Portfolio</div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className={`px-3 py-2 rounded ${
                  pathname === item.href
                    ? 'bg-white text-gray-900 font-semibold'
                    : 'hover:bg-gray-700 transition'
                }`}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}
        onClick={toggleMenu}
      >
        <ul className="flex flex-col space-y-4 bg-gray-800 p-4 mt-2">
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className={`px-3 py-2 rounded ${
                  pathname === item.href
                    ? 'bg-white text-gray-900 font-semibold'
                    : 'hover:bg-gray-700 transition'
                }`}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
