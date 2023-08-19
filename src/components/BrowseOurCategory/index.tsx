import { FC, useEffect, useState } from "react";
import { Grid } from "@mantine/core";
import CategoryCard from "@/components/CategoryCard";
import { BrowseOurCategoryContainer, MainTitle } from "./style";
import { CategoryProps } from "@/interfaces/index";
import { getDataByParam } from "@/services/index";

const BrowseOurCategory: FC = () => {
  const [categoriesData, setCategoriesData] = useState<CategoryProps[]>([]);

  useEffect(() => {
    getDataByParam("categories").then((data: CategoryProps[]) => {
      setCategoriesData(data);
    });
  }, []);

  return !!categoriesData?.length ? (
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
  ) : (
    <h1>No Data!</h1>
  );
};

export default BrowseOurCategory;
