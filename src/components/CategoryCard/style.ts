import { styled } from "styled-components";

export const CategoryCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media screen and (min-width: 1024px) {
    width: 24%;
  }

  @media screen and (min-width: 580px) and (max-width: 1024px) {
    width: 49%;
  }
`;

export const ImageContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
`;

export const CardTitle = styled.h4`
  font-size: 1rem;
  margin: 0;
  text-align: left;
  text-transform: capitalize;
`;

export const CardDescription = styled.p`
  font-size: 0.75rem;
  opacity: 0.7;
  text-align: left;
`;
