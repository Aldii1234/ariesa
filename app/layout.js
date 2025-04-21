'use client';

import './globals.css';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';

export default function RootLayout({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      console.log('Root in view!');
    }
  }, [isInView]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="p-4 flex justify-end">
            <ThemeToggle />
          </div>
          <div ref={ref}>
            {/* AnimatePresence hanya untuk komponen yang berubah */}
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
