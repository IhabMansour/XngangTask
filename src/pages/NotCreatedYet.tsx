import { FC } from "react";
import ComingSoon from "@/images/coming-soon.jpg";
import { NotCreatedYetContainer } from "./styles";

const NotCreatedYet: FC = () => {
  return (
    <NotCreatedYetContainer>
      <img src={ComingSoon} alt="Coming Soon" />
    </NotCreatedYetContainer>
  );
};

export default NotCreatedYet;
