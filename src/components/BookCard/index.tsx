import { FC } from "react";
import { BookCardContainer, BookDetails, BookTitle, ImageCard } from "./style";
import { BookProps } from "../../interfaces";

const BookCard: FC<BookProps> = ({
  image,
  title,
  author,
  reviewedBy,
  hasBackground,
}) => {
  return (
    <BookCardContainer>
      <ImageCard src={image} />

      <BookTitle hasBackground={hasBackground}>{title}</BookTitle>

      <BookDetails hasBackground={hasBackground}>by {author}</BookDetails>
      <BookDetails hasBackground={hasBackground}>
        reviewed by {reviewedBy}
      </BookDetails>
    </BookCardContainer>
  );
};

export default BookCard;
