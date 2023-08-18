import { styled } from "styled-components";

export const FullBookDetailsContainer = styled.div`
  width: 100%;
  padding: 1rem;

  @media screen and (min-width: 1024px) {
    padding: 1rem 8rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 1rem 4rem;
  }
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: contain;
  @media screen and (min-width: 992px) {
    border-right: 1px solid #2f2f2f;
  }
`;

export const BookTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
  text-align: center;
  color: #89c33c;

  @media screen and (min-width: 992px) {
    text-align: left;
    padding-left: 2rem;
  }
`;

export const BookDetails = styled.p`
  font-size: 1.25rem;
  opacity: 0.6;
  text-align: center;
  text-transform: capitalize;
  color: #000000;

  @media screen and (min-width: 992px) {
    text-align: left;
    padding-left: 2rem;
  }
`;
