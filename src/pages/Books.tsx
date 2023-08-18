import { FC } from "react";
import BrowseOurCategory from "../components/BrowseOurCategory";
import Nonfiction from "../components/Nonfiction";
import Fiction from "../components/Fiction";
import Children from "../components/Children";
import SelfImprovement from "../components/SelfImprovement";

const Books: FC = () => {
  return (
    <div style={{ width: "100%" }}>
      <BrowseOurCategory />

      <Nonfiction />

      <Fiction />

      <Children />

      <SelfImprovement />
    </div>
  );
};

export default Books;
