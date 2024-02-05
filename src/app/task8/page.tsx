'use client';
import { motion } from 'framer-motion';

export default function Task8() {
  return (
    <div className="h-screen bg-[#181818] text-white flex flex-col items-center justify-center text-2xl">
      <span>
        {'hello world'.split('').map((item, index) => (
          <motion.span
            className="relative"
            initial={{ opacity: 0, top: '250px' }}
            animate={{ opacity: 1, top: 0 }}
            transition={{ duration: 2, delay: index * 0.1 }}
            key={index}
          >
            {item}
          </motion.span>
        ))}
      </span>
    </div>
  );
}

