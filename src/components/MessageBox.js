import { ReactComponent as Wildfire } from "../assets/wildfire.svg";
import Dayjs from "react-dayjs";

const MessageBox = ({ info }) => {
  return (
    <div className="messageBox absolute bottom-8 left-8 z-50 p-3 w-1/4 bg-gray-800 text-gray-200 opacity-80 rounded-2xl shadow-2xl">
      <Wildfire className="m-auto w-8" />
      <strong>{info.title}</strong>
      <ul>
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
    </div>
  );
};

export default MessageBox;
