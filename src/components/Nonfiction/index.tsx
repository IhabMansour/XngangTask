import { FC, useEffect, useState } from "react";
import { getDataByParam } from "@/services/index";
import { BookProps } from "@/interfaces/index";
import BooksSlider from "@/components/BooksSlider";

const Nonfiction: FC = () => {
  const [nonfictionData, setNonfictionData] = useState<BookProps[]>([]);

  useEffect(() => {
    getDataByParam("nonfiction").then((data: BookProps[]) => {
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
