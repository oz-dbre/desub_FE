'use client';

import { motion } from 'framer-motion';
import { marqueeText } from '@/constants/marquee';

const Marquee = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30,
          ease: 'linear',
        },
      },
    },
  };

  const repeatedText = marqueeText.repeat(20);

  return (
    <div className="w-full h-[5rem] md:h-[9.6rem] pt-[9rem] md:pt-[18rem]">
      <div className="bg-[#F3F3F3] p-4 md:p-8 overflow-hidden">
        <motion.div
          className="whitespace-nowrap inline-block"
          variants={marqueeVariants}
          animate="animate"
        >
          <p className="text-black text-[2.5rem] inline-block">{repeatedText}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
