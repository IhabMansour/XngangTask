import { FC, useState, useEffect } from "react";
import BrowseOurCategory from "@/components/BrowseOurCategory";
import Nonfiction from "@/components/Nonfiction";
import Fiction from "@/components/Fiction";
import Children from "@/components/Children";
import SelfImprovement from "@/components/SelfImprovement";
import { checkApi } from "@/services/index";
import { Loader } from "@mantine/core";
import { BooksPageContainer } from "./styles";

const Books: FC = () => {
  const [isApiWorking, setIsApiWorking] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    checkApi()
      .then((res) => {
        setIsApiWorking(res);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <BooksPageContainer noData={isLoading || !isApiWorking}>
      {isLoading ? (
        <Loader color="lime" />
      ) : isApiWorking ? (
        <>
          <BrowseOurCategory />
          <Nonfiction />
          <Fiction />
          <Children />
          <SelfImprovement />
        </>
      ) : (
        <h1>No Data!</h1>
      )}
    </BooksPageContainer>
  );
};

export default Books;
