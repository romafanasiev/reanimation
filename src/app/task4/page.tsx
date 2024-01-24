'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Task4() {
  return (
    <div className="h-screen bg-[#0F987F] flex flex-col items-center justify-center text-white">
      <motion.div
        initial={{ top: 0, rotate: 45, translateX: '-50%', translateY: '-50%' }}
        animate={{
          top: '50%',
          rotate: 0,
          translateX: '-50%',
          translateY: '-50%',
        }}
        transition={{ type: 'spring', bounce: 0.8, duration: 3 }}
        className="absolute left-1/2 h-[25vw] w-[25vw]"
      >
        <Image src="ball.svg" alt="ball" unoptimized fill />
      </motion.div>
      <div className="overflow-hidden">
        <motion.h1
          initial={{ top: '-50px', opacity: 0 }}
          animate={{ top: '0', opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="block m-auto font-bold leading-tight relative"
        >
          welcome.
        </motion.h1>
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100vw' }}
        transition={{ duration: 1, delay: 3 }}
        className="h-[1px] relative bg-white"
      />
    </div>
  );
}

