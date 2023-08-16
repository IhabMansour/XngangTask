import { FC } from "react";
import {
  CardDescription,
  CardTitle,
  CategoryCardContainer,
  ImageContainer,
} from "./style";
import { Image } from "@mantine/core";

interface CategoryCardProps {
  categoryImage: string;
  title: string;
  description: string;
}

const CategoryCard: FC<CategoryCardProps> = ({
  categoryImage,
  title,
  description,
}) => {
  return (
    <CategoryCardContainer>
      <ImageContainer>
        <Image src={categoryImage} w="100%" h="auto" />
      </ImageContainer>

      <div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </div>
    </CategoryCardContainer>
  );
};

export default CategoryCard;
