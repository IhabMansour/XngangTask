import { styled } from "styled-components";

export const BooksSliderContainer = styled.div<{ imageSrc?: string }>`
  padding: 1rem;
  background-image: ${(props) => `url(${props.imageSrc})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background: ${(props) => (props.imageSrc ? "" : "#e7ecf1")};

  @media screen and (min-width: 1024px) {
    padding: 1rem 8rem 3rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 1rem 4rem 3rem;
  }
`;

export const MainTitle = styled.h2<{ imageSrc?: string }>`
  color: ${(props) => (props.imageSrc ? "#e7ecf1" : "#000000")};
  text-transform: capitalize;
  @media screen and (min-width: 580px) {
    text-align: left;
  }
`;

export const IconContainer = styled.button`
  width: 2rem;
  height: 2rem;
  background: #ffffff;
  border: 1px solid #ffffff;
  color: #e7ecf1;
  font-size: 1.5rem;
  cursor: pointer;
`;
