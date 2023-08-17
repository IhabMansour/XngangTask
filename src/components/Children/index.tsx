import { FC, useEffect, useState } from "react";
import { getDataByParam } from "../../services";
import { BookProps } from "../../interfaces";
import BooksSlider from "../BooksSlider";

const Children: FC = () => {
  const [childrenData, setChildrenData] = useState<BookProps[]>([]);

  useEffect(() => {
    getDataByParam("children").then((data) => {
      setChildrenData(data);
    });
  }, []);

  return <BooksSlider mainTitle="children's" booksData={childrenData} />;
};

export default Children;
