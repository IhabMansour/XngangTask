import { FC, useEffect, useState } from "react";
import { getDataByParam } from "../../services";
import { BookProps } from "../../interfaces";
import BooksSlider from "../BooksSlider";
import MountainImage from "../../Images/mountain.jpg";

const SelfImprovement: FC = () => {
  const [selfImprovement, setSelfImprovement] = useState<BookProps[]>([]);

  useEffect(() => {
    getDataByParam("self_improvement").then((data) => {
      setSelfImprovement(data);
    });
  }, []);

  return (
    <BooksSlider
      mainTitle="self improvement"
      booksData={selfImprovement}
      backgroundImage={MountainImage}
      booksCategory="self_improvement"
    />
  );
};

export default SelfImprovement;
