import { ReactComponent as Wildfire } from "../assets/wildfire.svg";
import { ReactComponent as Strom } from "../assets/storm.svg";
import Dayjs from "react-dayjs";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const MessageBox = ({ info, setInfo, constraintsRef }) => {
  const clickHandler = e => {
    setInfo(null);
  };

  return (
    <motion.div
      className="messageBox absolute bottom-0 left-0 m-8 max-w-full p-3 z-50 bg-gray-800 text-gray-200 bg-opacity-80 rounded-2xl shadow-2xl"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      drag
      dragConstraints={constraintsRef}
    >
      <motion.div
        className="absolute top-0 right-0 "
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{
          scale: 0.9,
          rotate: -180,
          borderRadius: "100%"
        }}
        onClick={clickHandler}
      >
        <Icon
          className="text-4xl text-blue-500 hover:text-blue-300 m-2"
          icon="ci:off-close"
        />
      </motion.div>
      {info.category === "wildfires" && <Wildfire className="m-auto w-20" />}
      {info.category === "severeStorms" && <Strom className="m-auto w-20" />}
      <strong>{info.title}</strong>
      <ul className="text-white opacity-60 text-sm">
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        {info.description && (
          <li>
            Description: <strong>{info.description}</strong>
          </li>
        )}
        <li>
          Type: <strong>{info.type}</strong>
        </li>
        <li>
          Date:{" "}
          <strong>
            <Dayjs format="ddd, MMM D, YYYY h:mm A Z">{info.date}</Dayjs>
          </strong>
        </li>
      </ul>
    </motion.div>
  );
};

export default MessageBox;
