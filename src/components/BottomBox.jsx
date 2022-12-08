import { motion } from "framer-motion";

const boxVariants = {
  initial: {
    y: 100,
  },
  animate: {
    y: 0,
  },
};

const BottomBox = (props) => {
  return (
    <motion.div
      variants={boxVariants}
      className="bg-gray-500 uppercase text-gray-200 text-center text-base rounded-t-md flex justify-center items-center underline underline-offset-4"
    >
      {props.children}
    </motion.div>
  );
};

export default BottomBox;
