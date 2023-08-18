import { FC, useEffect, useState } from "react";
import { getDataByParam } from "../../services";
import { BookProps } from "../../interfaces";
import BooksSlider from "../BooksSlider";
import MoonImage from "../../Images/moon.jpg";

const Fiction: FC = () => {
  const [fictionData, setFictionData] = useState<BookProps[]>([]);

  useEffect(() => {
    getDataByParam("fiction").then((data) => {
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
