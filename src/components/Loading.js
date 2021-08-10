import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="backdrop flex absolute z-10 w-screen h-screen">
      <motion.div
        className="loading bg-white flex space-x-2 p-5 rounded-full m-auto justify-center"
        initial={{ opacity: 0, y: 200, rotate: 270 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1 }}
        style={{ filter: "blur(0)" }}
      >
        <motion.div
          className="bg-blue-600 p-2 w-5 h-5 rounded-full animate-bounce blue-circle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
        <motion.div
          className="bg-green-600 p-2 w-5 h-5 rounded-full animate-bounce green-circle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
        <motion.div
          className="bg-red-600 p-2 w-5 h-5 rounded-full animate-bounce red-circle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Loading;
