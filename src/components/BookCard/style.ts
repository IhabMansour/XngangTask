import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "@/theme/colors";

export const BookCardContainer = styled(NavLink)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
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
  color: ${(props) =>
    props.hasBackground ? `${COLORS.gray}` : `${COLORS.black}`};
`;

export const BookDetails = styled.p<{ hasBackground?: string }>`
  font-size: 0.75rem;
  opacity: 0.7;
  text-align: center;
  text-transform: uppercase;
  margin: 0;
  color: ${(props) =>
    props.hasBackground ? `${COLORS.green}` : `${COLORS.black}`};
`;
