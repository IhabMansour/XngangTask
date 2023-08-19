import { FC, useEffect, useState } from "react";
import { getDataByParam } from "@/services/index";
import { BookProps } from "@/interfaces/index";
import BooksSlider from "@/components/BooksSlider";

const Children: FC = () => {
  const [childrenData, setChildrenData] = useState<BookProps[]>([]);

  useEffect(() => {
    getDataByParam("children").then((data: BookProps[]) => {
      setChildrenData(data);
    });
  }, []);

  return (
    <BooksSlider
      mainTitle="children's"
      booksData={childrenData}
      booksCategory="children"
    />
  );
};

export default Children;
