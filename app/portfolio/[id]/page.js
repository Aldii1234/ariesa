import Link from 'next/link'
import { FaCode, FaPalette, FaMobileAlt } from 'react-icons/fa'

const portfolioItems = {
  '1': {
    title: 'Web App Development',
    description:
      'Proyek ini melibatkan pembuatan aplikasi web fullstack menggunakan Next.js, Tailwind CSS, dan Firebase. Fokus pada autentikasi pengguna, dashboard interaktif, dan integrasi data real-time.',
    icon: <FaCode className="text-blue-500 text-4xl mb-4" />,
  },
  '2': {
    title: 'UI/UX Design',
    description:
      'Merancang tampilan antarmuka modern dan intuitif dengan Figma. Proyek ini fokus pada pengalaman pengguna, layout yang responsif, dan konsistensi desain pada berbagai perangkat.',
    icon: <FaPalette className="text-pink-500 text-4xl mb-4" />,
  },
  '3': {
    title: 'Mobile App Project',
    description:
      'Mengembangkan aplikasi mobile lintas platform menggunakan React Native. Aplikasi mencakup fitur notifikasi, autentikasi, dan integrasi API eksternal.',
    icon: <FaMobileAlt className="text-green-500 text-4xl mb-4" />,
  },
}

export default function PortfolioDetail({ params }) {
  const item = portfolioItems[params.id]

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-6">
        <p className="text-xl text-red-500">Portfolio tidak ditemukan</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-6 py-12 md:px-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center">{item.icon}</div>
        <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">{item.description}</p>

        <Link
          href="/portfolio"
          className="inline-block mt-8 px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          ← Kembali ke Portfolio
        </Link>
      </div>
    </div>
  )
}
