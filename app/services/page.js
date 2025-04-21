"use client"

import { FaLaptopCode, FaPaintBrush, FaRocket } from "react-icons/fa"
import { motion } from "framer-motion"

const services = [
  {
    icon: <FaLaptopCode className="text-blue-600 text-3xl sm:text-4xl" />,
    text: "Pembuatan Website dengan Next.js dan React",
  },
  {
    icon: <FaPaintBrush className="text-pink-500 text-3xl sm:text-4xl" />,
    text: "Desain UI/UX Interaktif",
  },
  {
    icon: <FaRocket className="text-green-500 text-3xl sm:text-4xl" />,
    text: "Optimasi SEO dan Kecepatan Website",
  },
]

export default function Services() {
  return (
    <div className="min-h-screen px-4 py-10 sm:px-6 sm:py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-md">
        <motion.h1 
          className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Layanan
        </motion.h1>

        <ul className="space-y-6">
          {services.map((service, index) => (
            <motion.li
              key={index}
              className="flex items-start space-x-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex-shrink-0 mt-1">
                {service.icon}
              </div>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                {service.text}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}
