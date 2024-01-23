'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="h-screen">
      <motion.div
        initial={{ width: '0', height: '3px', top: '50%' }}
        animate={{ width: '100vw', height: '100%', top: '0' }}
        className="bg-white top-1/2 absolute"
        transition={{
          ease: 'easeIn',
          duration: 4,
          height: { duration: 2, delay: 2 },
          top: { duration: 2, delay: 2 },
          width: { duration: 2 },
        }}
      />
    </div>
  );
}

