import { Icon } from "@iconify/react";

const Marker = ({ lat, lng, onClick }) => {
  return (
    <div className="marker" onClick={onClick}>
      <Icon
        className="icon"
        icon="ant-design:environment-twotone"
        style={{ transform: "translate(-50%, -100%)" }}
      />
    </div>
  );
};

export default Marker;
