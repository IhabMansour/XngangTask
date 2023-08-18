import { styled } from "styled-components";
import { COLORS } from "../../theme/colors";

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
    border-right: 1px solid ${COLORS.lightBlack};
  }
`;

export const BookTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
  text-align: center;
  color: ${COLORS.green};

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
  color: ${COLORS.black};

  @media screen and (min-width: 992px) {
    text-align: left;
    padding-left: 2rem;
  }
`;
