'use client';
import { motion } from 'framer-motion';

const parentAnimation = {
  end: {
    transition: {
      staggerChildren: 3,
    },
  },
};

const blockAnimation = {
  initial: { height: 0 },
  end: {
    height: ['0vh', '33vh', '0vh'],
    transition: {
      duration: 2,
    },
  },
};

const middleBlockAnimation = {
  initial: { height: 0 },
  end: {
    height: ['0%', '100%'],
    transition: {
      duration: 2,
    },
  },
};

export default function Task5() {
  return (
    <div className="bg-white">
      <motion.div
        variants={parentAnimation}
        initial="initial"
        animate="end"
        className="h-screen flex flex-col"
      >
        <motion.div
          className="bg-[#C9D6EA] w-full"
          variants={blockAnimation}
          initial="initial"
          animate="end"
        />
        <motion.div
          className="bg-[#5E9EFF]  w-full"
          variants={middleBlockAnimation}
          initial="initial"
          animate="end"
        />
        <motion.div
          className="bg-[#2C80FF]  w-full"
          variants={blockAnimation}
          initial="initial"
          animate="end"
        />
      </motion.div>

      <div className="overflow-hidden absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10">
        <motion.h1
          initial={{
            left: '-100%',
          }}
          animate={{
            left: 0,
          }}
          transition={{ type: 'spring', bounce: 0.8, duration: 3, delay: 1 }}
          className="text-2xl m-0 font-extrabold text-white relative"
        >
          Oceana.
        </motion.h1>
      </div>
    </div>
  );
}

