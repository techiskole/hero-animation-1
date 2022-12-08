import { motion } from "framer-motion";
import BottomBox from "./BottomBox";

const containerVariants = {
  animate: {
    transition: {
      delayChildren: 3.5,
      staggerChildren: 0.4,
    },
  },
};

const BottomGrid = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={containerVariants}
      className="grid grid-cols-3 gap-4 absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-screen-lg mx-auto z-30 h-[10vh]"
    >
      <BottomBox>Best deals this Christmas</BottomBox>
      <BottomBox>10% off for orders above 2000 LKR</BottomBox>
      <BottomBox>Special Discount for Amex Cards</BottomBox>
    </motion.div>
  );
};

export default BottomGrid;
