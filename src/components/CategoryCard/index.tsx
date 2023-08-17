import { FC } from "react";
import {
  CardDescription,
  CardTitle,
  CategoryCardContainer,
  ImageContainer,
} from "./style";
import { CategoryProps } from "../../interfaces";

const CategoryCard: FC<CategoryProps> = ({ image, title, description }) => {
  return (
    <CategoryCardContainer>
      <ImageContainer src={image} />

      <div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </div>
    </CategoryCardContainer>
  );
};

export default CategoryCard;
