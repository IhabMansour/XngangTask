import { styled } from "styled-components";

export const BrowseOurCategoryContainer = styled.section`
  padding: 1rem;

  @media screen and (min-width: 1024px) {
    padding: 2rem 8rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 1rem 4rem;
  }
`;

export const MainTitle = styled.h3`
  text-transform: capitalize;
  font-size: 1rem;
  span {
    font-weight: 400;
  }
  @media screen and (min-width: 1024px) {
    text-align: left;
    font-size: 2rem;
  }
`;
