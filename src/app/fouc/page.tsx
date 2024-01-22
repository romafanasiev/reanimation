'use client';
import { motion } from 'framer-motion';

const divVars = {
  rest: { borderRadius: '50%', width: '16vw', height: '16vw' },
  hover: {
    borderRadius: '2%',
    width: '20vw',
    height: '28vw',
    transition: {
      duration: 1.5,
    },
  },
};

const textVars = {
  rest: { transform: 'translateX(30%)', fontSize: 'clamp(10rem, 5vw, 17rem)' },
  hover: {
    transform: '0',
    fontSize: 'clamp(5rem, 5vw, 10rem)',
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

export default function About() {
  return (
    <div className="h-screen flex bg-[#F0F6CE] text-[#F0F6CE] justify-center align-center items-center">
      <motion.div
        className="bg-[#CE5700] flex justify-center align-center items-center"
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={divVars}
      >
        <motion.p variants={textVars}>luxury</motion.p>
      </motion.div>
    </div>
  );
}

