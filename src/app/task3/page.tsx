'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const maskStyles = 'overflow-hidden relative';
const textStyles =
  'absolute left-[50%] font-bold text-2xl m-0 translate-x-[-50%] translate-y-[-50%] text-white';

const parentAnimation = {
  initial: { height: 0 },
  end: {
    height: '80vh',
    transition: {
      duration: 2,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const wrapperAnimation = {
  initial: { height: 0 },
  end: {
    height: 'auto',
    transition: {
      duration: 1,
      when: 'beforeChildren',
      staggerChildren: 1,
    },
  },
};

const textAnimation = {
  initial: { opacity: 0, top: '40%' },
  end: {
    opacity: 1,
    top: '50%',
    transition: {
      duration: 1,
    },
  },
};

const imageAnimation = {
  initial: { scale: 1 },
  end: {
    scale: 1.3,
    transition: {
      duration: 1,
    },
  },
};

const items = [
  { text: 'living', img: '/images/img1.jpg' },
  { text: 'in', img: '/images/img2.jpg' },
  { text: 'abstraction', img: '/images/img3.jpg' },
];

export default function About() {
  return (
    <div className="h-screen grid items-center justify-center">
      <motion.div
        className="flex justify-between gap-4"
        variants={parentAnimation}
        initial="initial"
        animate="end"
      >
        {items.map((item, index) => {
          return (
            <motion.div
              className={maskStyles}
              variants={wrapperAnimation}
              key={index}
            >
              <motion.div variants={imageAnimation}>
                <motion.p className={textStyles} variants={textAnimation}>
                  {item.text}
                </motion.p>
                <Image
                  src={item.img}
                  alt="Abstract image"
                  width={300}
                  height={600}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

