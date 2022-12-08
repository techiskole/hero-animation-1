import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        delay: 1.3,
        type: "spring",
        stiffness: 110,
      }}
      className="text-white"
    >
      <div className="text-3xl tracking-widest uppercase">Fashion Bug</div>
      <div className="text-sm text-gray-400 uppercase tracking-widest">
        Best in the market right now
      </div>
    </motion.div>
  );
};

export default Logo;
