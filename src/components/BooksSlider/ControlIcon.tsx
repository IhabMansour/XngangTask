import { FC } from "react";
import { ControlIconProps } from "../../interfaces";
import { IconContainer } from "./style";

const ControlIcon: FC<ControlIconProps> = ({ isLeft }) => {
  return <IconContainer>{isLeft ? "<" : ">"}</IconContainer>;
};

export default ControlIcon;
