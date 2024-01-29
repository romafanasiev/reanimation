'use client';
import { motion } from 'framer-motion';

export default function Task7() {
  return (
    <>
      <div className="h-screen bg-teal-600"></div>
      <div className="h-screen bg-amber-500 flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2 }}
          viewport={{ once: false }}
          className="text-2xl"
        >
          Hello world{' '}
        </motion.h1>
      </div>
      <div className="h-screen bg-blue-500"></div>
    </>
  );
}

