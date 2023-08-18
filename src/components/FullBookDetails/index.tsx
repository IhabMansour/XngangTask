import { FC, useEffect, useState, useCallback } from "react";
import {
  BookDetails,
  BookTitle,
  FullBookDetailsContainer,
  ImageContainer,
} from "./style";
import { Grid } from "@mantine/core";
import { BookProps } from "@/interfaces/index";
import { getDataByID } from "@/services/index";
import { useLocation } from "react-router-dom";

const FullBookDetails: FC = () => {
  const location = useLocation();
  const [book, setBook] = useState<BookProps>();

  const urlDetails = useCallback(
    () => location.pathname.split("/"),
    [location.pathname]
  );

  console.log(location.pathname.split("/"));

  useEffect(() => {
    getDataByID(urlDetails()?.[2], Number(urlDetails()?.[3])).then((data) => {
      setBook(data);
    });
  }, [urlDetails]);

  return (
    <FullBookDetailsContainer>
      <Grid m={0} justify="center" align="center">
        <Grid.Col md={6} lg={6}>
          <ImageContainer src={book?.image} />
        </Grid.Col>
        <Grid.Col md={6} lg={6}>
          <BookTitle>{book?.title}</BookTitle>

          <BookDetails>by {book?.author}</BookDetails>

          <BookDetails>reviewed by {book?.reviewedBy}</BookDetails>
        </Grid.Col>
      </Grid>
    </FullBookDetailsContainer>
  );
};

export default FullBookDetails;
