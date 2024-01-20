'use client';
import { motion } from 'framer-motion';
import './index.css';

export default function About() {
  return (
    <div className="bg-[#2864ff] text-white h-full">
      <h1 className="mt-[18%] text-center opacity-[0.1] text-[30rem]">
        BORING
      </h1>
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
      ></motion.div>
    </div>
  );
}

