import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 0,
  },
  animated: {
    opacity: 1,
    transition: {
      delay: 2,
    },
  },
};

// const singleWord = {
//   initial: {
//     opacity: 0,
//     y: 50,
//   },
//   animated: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//     },
//   },
// };

const wordVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animated: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const wordsContainerVariants = {
  animated: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  return (
    <motion.div
      className="mx-auto flex w-full items-center justify-center overflow-hidden py-2 text-center sm:py-0"
      variants={quote}
      initial="initial"
      animate="animated"
    >
      <motion.h1
        className={`dark:text-light inline-block  w-full text-8xl
      font-bold
      text-black ${className}`}
      >
        <motion.span
          variants={wordsContainerVariants}
          initial="initial"
          animate="animated"
        >
          {text.split(" ").map((word, index) => {
            return (
              <motion.span
                key={index}
                className="inline-block"
                variants={wordVariants}
              >
                {word}&nbsp;
              </motion.span>
            );
          })}
        </motion.span>
      </motion.h1>
    </motion.div>
  );
}
