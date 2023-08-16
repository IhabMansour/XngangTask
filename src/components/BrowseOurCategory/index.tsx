import { FC } from "react";
import { BOOKS_BROWSER_CATEGORIES } from "../../constants";
import CategoryCard from "../CategoryCard";
import {
  BrowseOurCategoryContainer,
  CatagoriesContainer,
  MainTitle,
} from "./style";

const BrowseOurCategory: FC = () => {
  return (
    <BrowseOurCategoryContainer>
      <MainTitle>
        Browse <span>our most popular category</span>
      </MainTitle>
      <CatagoriesContainer>
        {BOOKS_BROWSER_CATEGORIES.map((category) => (
          <CategoryCard
            key={category.categoryID}
            title={category.title}
            description={category.description}
            categoryImage={category.IconComponent}
          />
        ))}
      </CatagoriesContainer>
    </BrowseOurCategoryContainer>
  );
};

export default BrowseOurCategory;
