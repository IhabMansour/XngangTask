import { FC, useEffect, useState } from "react";
import { getDataByParam } from "@/services/index";
import { BookProps } from "@/interfaces/index";
import BooksSlider from "@/components/BooksSlider";
import MoonImage from "@/images/moon.jpg";

const Fiction: FC = () => {
  const [fictionData, setFictionData] = useState<BookProps[]>([]);

  useEffect(() => {
    getDataByParam("fiction").then((data: BookProps[]) => {
      setFictionData(data);
    });
  }, []);

  return (
    <BooksSlider
      mainTitle="fiction"
      booksData={fictionData}
      backgroundImage={MoonImage}
      booksCategory="fiction"
    />
  );
};

export default Fiction;
