import { Icon } from "@iconify/react";

const Marker = ({ lat, lng, onClick }) => {
  return (
    <div className="marker" onClick={onClick}>
      <Icon
        icon="ant-design:fire-twotone"
        className="icon"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
};

export default Marker;
