import { styled } from "styled-components";

export const BookCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const ImageCard = styled.img`
  width: 100%;
  height: 18rem;
  object-fit: contain;
`;

export const BookTitle = styled.h4<{ hasBackground?: string }>`
  font-size: 1rem;
  margin: 0;
  text-align: left;
  color: ${(props) => (props.hasBackground ? "#e7ecf1" : "#000000")};
`;

export const BookDetails = styled.p<{ hasBackground?: string }>`
  font-size: 0.75rem;
  opacity: 0.7;
  text-align: left;
  text-transform: uppercase;
  margin: 0;
  color: ${(props) => (props.hasBackground ? "#89c33c" : "#000000")};
`;
