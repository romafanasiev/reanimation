'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const maskStyles = 'overflow-hidden relative';
const textStyles =
  'absolute left-[50%] font-bold text-2xl m-0 translate-x-[-50%] translate-y-[-50%] text-white z-10';

const parentAnimation = {
  end: {
    transition: {
      staggerChildren: 0.3,
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
      delay: 3,
    },
  },
};

const imageAnimation = {
  initial: { scale: 1, y: '-100vh' },
  end: {
    y: 0,
    scale: 1.3,
    transition: {
      y: { duration: 1 },
      scale: { duration: 1, delay: 1 },
    },
  },
};

const items = [
  { text: 'living', img: '/images/img1.jpg' },
  { text: 'in', img: '/images/img2.jpg' },
  { text: 'abstraction', img: '/images/img3.jpg' },
];

export default function Task3() {
  return (
    <div className="h-screen grid items-center justify-center">
      <motion.section
        className="flex justify-between gap-4 h-[80vh]"
        variants={parentAnimation}
        initial="initial"
        animate="end"
      >
        {items.map((item, index) => {
          return (
            <div className={maskStyles} key={index}>
              <motion.div variants={imageAnimation} className="relative">
                <Image
                  src={item.img}
                  alt="Abstract image"
                  width={300}
                  height={600}
                />
              </motion.div>
              <motion.p className={textStyles} variants={textAnimation}>
                {item.text}
              </motion.p>
            </div>
          );
        })}
      </motion.section>
    </div>
  );
}

