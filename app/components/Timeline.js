'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { timelineData } from '@/data/portfolio';

export default function Timeline() {
  return (
    <div className="relative border-l border-gray-300 dark:border-gray-700 ml-4">
      {timelineData.map((item, index) => (
        <motion.div
          key={item.slug}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="mb-10 ml-4"
        >
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 top-1.5" />
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
          <p className="mt-1 text-sm">{item.summary}</p>
          <Link
            href={`/portfolio/${item.slug}`}
            className="text-blue-600 hover:underline text-sm mt-2 inline-block"
          >
            Lihat Detail →
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
