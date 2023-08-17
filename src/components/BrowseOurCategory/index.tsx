import { FC, useEffect, useState } from "react";
import { Grid } from "@mantine/core";
import CategoryCard from "../CategoryCard";
import { BrowseOurCategoryContainer, MainTitle } from "./style";

interface CategoryProps {
  categoryID: number;
  title: string;
  description: string;
  image: string;
}

const BrowseOurCategory: FC = () => {
  const [categoriesData, setCategoriesData] = useState([]);

  const getData = () =>
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setCategoriesData(data));

  useEffect(() => {
    getData();
  }, []);

  return (
    <BrowseOurCategoryContainer>
      <MainTitle>
        Browse <span>our most popular category</span>
      </MainTitle>
      <Grid>
        {categoriesData?.map((category: CategoryProps) => (
          <Grid.Col md={6} lg={3}>
            <CategoryCard
              key={category.categoryID}
              title={category.title}
              description={category.description}
              categoryImage={category.image}
            />
          </Grid.Col>
        ))}
      </Grid>
    </BrowseOurCategoryContainer>
  );
};

export default BrowseOurCategory;
