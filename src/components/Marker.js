import { Icon } from "@iconify/react";

const Marker = ({ lat, lng, onClick }) => {
  return (
    <div className="marker" onClick={onClick}>
      <Icon icon="ant-design:fire-twotone" className="icon" />
    </div>
  );
};

export default Marker;
