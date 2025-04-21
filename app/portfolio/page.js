'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaCode, FaPalette, FaMobileAlt } from 'react-icons/fa'

const portfolioItems = [
  {
    id: '1',
    title: 'Web App Development',
    description: 'Membangun aplikasi web full-stack menggunakan Next.js dan Firebase.',
    icon: <FaCode className="text-blue-500 text-3xl" />,
  },
  {
    id: '2',
    title: 'UI/UX Design',
    description: 'Merancang antarmuka pengguna yang responsif dan modern dengan Figma.',
    icon: <FaPalette className="text-pink-500 text-3xl" />,
  },
  {
    id: '3',
    title: 'Mobile App Project',
    description: 'Mengembangkan aplikasi mobile menggunakan React Native.',
    icon: <FaMobileAlt className="text-green-500 text-3xl" />,
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen py-10 px-6 md:px-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">Portfolio Timeline</h1>

      <div className="relative border-l-4 border-gray-300 dark:border-gray-700 ml-4">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-10 ml-6"
          >
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-white dark:bg-gray-800 p-3 shadow-md">
                {item.icon}
              </div>
              <h2 className="text-xl font-semibold">{item.title}</h2>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{item.description}</p>
            <Link
              href={`/portfolio/${item.id}`}
              className="inline-block mt-3 text-blue-600 hover:underline dark:text-blue-400"
            >
              Lihat Detail →
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
