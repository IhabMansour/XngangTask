import { FC, useEffect, useState } from "react";
import { getDataByParam } from "../../services";
import { BookProps } from "../../interfaces";
import BooksSlider from "../BooksSlider";

const Nonfiction: FC = () => {
  const [nonfictionData, setNonfictionData] = useState<BookProps[]>([]);

  useEffect(() => {
    getDataByParam("nonfiction").then((data) => {
      setNonfictionData(data);
    });
  }, []);

  return (
    <BooksSlider
      mainTitle="nonfiction"
      booksData={nonfictionData}
      booksCategory="nonfiction"
    />
  );
};

export default Nonfiction;
