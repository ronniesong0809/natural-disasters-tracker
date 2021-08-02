import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const WildfireMarker = ({ lat, lng, onClick }) => {
  return (
    <motion.div
      className="text-3xl text-red-400 hover:text-red-600"
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: Math.random() * 4 + 1 }
      }}
      whileHover={{ opacity: 1, scale: 1.2, transition: { duration: 0.1 } }}
      whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
      onClick={onClick}
    >
      <Icon
        className="icon"
        icon="ant-design:environment-twotone"
        style={{ transform: "translate(-50%, -100%)" }}
      />
    </motion.div>
  );
};

const StormMarker = ({ lat, lng, onClick }) => {
  return (
    <div className=" text-3xl text-blue-500" onClick={onClick}>
      <Icon
        className="icon"
        icon="ic:twotone-storm"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
};

export { WildfireMarker, StormMarker };
