import { Icon } from "@iconify/react";

const WildfireMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="text-3xl text-red-400" onClick={onClick}>
      <Icon
        className="icon"
        icon="ant-design:environment-twotone"
        style={{ transform: "translate(-50%, -100%)" }}
      />
    </div>
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
