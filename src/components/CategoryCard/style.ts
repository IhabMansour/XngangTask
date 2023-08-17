import { styled } from "styled-components";

export const CategoryCardContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1.5rem;
`;

export const ImageContainer = styled.img`
  width: 2.625rem;
  height: 2.625rem;
  object-fit: contain;
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
