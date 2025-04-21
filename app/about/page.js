"use client"

import Image from "next/image"
import { FaUserCircle } from "react-icons/fa"
import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="min-h-screen px-4 py-10 sm:px-6 sm:py-12 bg-gray-100 dark:bg-gray-900">
      <motion.div 
        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center mb-6">
          <FaUserCircle className="text-indigo-600 dark:text-indigo-400 text-3xl sm:text-4xl mr-2" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
            Tentang Saya
          </h1>
        </div>

        <div className="flex flex-col items-center text-center">
          <Image
            src="/profile.jpg"
            alt="Foto Profil"
            width={140}
            height={140}
            className="rounded-full border-4 border-indigo-600 mb-4 shadow-md"
          />
          <motion.p 
            className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Saya adalah pengembang web yang antusias dengan teknologi modern seperti
            <strong className="text-indigo-600 dark:text-indigo-400"> Next.js</strong>,
            <strong className="text-blue-600 dark:text-blue-400"> React</strong>,
            dan <strong className="text-teal-600 dark:text-teal-400">Tailwind CSS</strong>.
            Fokus saya adalah membangun antarmuka pengguna yang interaktif, responsif,
            dan efisien secara performa.
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}
