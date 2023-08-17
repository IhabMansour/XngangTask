import { FC } from "react";
import {
  CardDescription,
  CardTitle,
  CategoryCardContainer,
  ImageContainer,
} from "./style";

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
      <ImageContainer src={categoryImage} />

      <div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </div>
    </CategoryCardContainer>
  );
};

export default CategoryCard;
