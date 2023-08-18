import { FC, useState, useEffect } from "react";
import BookCard from "@/components/BookCard";
import { BooksSliderProps } from "@/interfaces/index";
import { BooksSliderContainer, MainTitle } from "./style";
import { Carousel } from "@mantine/carousel";
import ControlIcon from "./ControlIcon";

const getControlStyles = (windowWidth: number) => {
  if (windowWidth <= 1024) {
    return {
      left: 0,
      right: 0,
    };
  } else if (windowWidth > 1024) {
    return {
      left: "-4.5rem",
      right: "-4.5rem",
    };
  }
};

const BooksSlider: FC<BooksSliderProps> = ({
  mainTitle,
  booksData,
  backgroundImage,
  booksCategory,
}) => {
  const [controlStyles, setControlStyles] = useState(
    getControlStyles(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setControlStyles(getControlStyles(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BooksSliderContainer imageSrc={backgroundImage}>
      <MainTitle imageSrc={backgroundImage}>{mainTitle}</MainTitle>

      <Carousel
        loop
        align="center"
        slideSize="20%"
        slideGap="xs"
        controlsOffset="xs"
        breakpoints={[
          { maxWidth: "xl", slideSize: "20%", slideGap: "lg" },
          { maxWidth: "lg", slideSize: "33.3%", slideGap: "lg" },
          { maxWidth: "xs", slideSize: "100%", slideGap: 0 },
        ]}
        previousControlIcon={<ControlIcon isLeft />}
        nextControlIcon={<ControlIcon />}
        styles={{
          controls: controlStyles,
          control: {
            border: "none",
          },
        }}>
        {booksData?.map((book) => (
          <Carousel.Slide>
            <BookCard
              key={book.id}
              id={book.id}
              image={book.image}
              title={book.title}
              author={book.author}
              reviewedBy={book.reviewedBy}
              hasBackground={backgroundImage}
              booksCategory={booksCategory}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </BooksSliderContainer>
  );
};

export default BooksSlider;
