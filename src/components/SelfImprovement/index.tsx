import { FC, useEffect, useState } from "react";
import { getDataByParam } from "@/services/index";
import { BookProps } from "@/interfaces/index";
import BooksSlider from "@/components/BooksSlider";
import MountainImage from "@/images/mountain.jpg";

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
