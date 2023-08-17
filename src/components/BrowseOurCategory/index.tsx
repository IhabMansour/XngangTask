import { FC, useEffect, useState } from "react";
import { Grid } from "@mantine/core";
import CategoryCard from "../CategoryCard";
import { BrowseOurCategoryContainer, MainTitle } from "./style";
import { CategoryProps } from "../../interfaces";
import { getDataByParam } from "../../services";

const BrowseOurCategory: FC = () => {
  const [categoriesData, setCategoriesData] = useState<CategoryProps[]>([]);

  useEffect(() => {
    getDataByParam("categories").then((data) => {
      setCategoriesData(data);
    });
  }, []);

  return (
    <BrowseOurCategoryContainer>
      <MainTitle>
        Browse <span>our most popular category</span>
      </MainTitle>
      <Grid>
        {categoriesData?.map((category) => (
          <Grid.Col md={6} lg={3}>
            <CategoryCard
              key={category.id}
              title={category.title}
              description={category.description}
              image={category.image}
            />
          </Grid.Col>
        ))}
      </Grid>
    </BrowseOurCategoryContainer>
  );
};

export default BrowseOurCategory;
