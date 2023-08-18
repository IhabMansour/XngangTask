import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "@/theme/colors";

export const FooterContainer = styled.footer`
  background-color: ${COLORS.lightBlack};
  overflow: hidden;

  & div {
    width: 100%;
  }
`;

export const GridContainer = styled.div<{
  isFirstOne?: boolean;
  isLastOne?: boolean;
}>`
  height: 100%;
  border-bottom: ${(props) =>
    props.isLastOne ? "none" : `1px solid ${COLORS.black}`};

  @media screen and (min-width: 768px) {
    border-bottom: none;
    border-left: 1px solid ${COLORS.black};
    margin-left: ${(props) => (props.isFirstOne ? "8rem" : 0)};
  }

  @media screen and (min-width: 1024px) {
    margin-left: ${(props) => (props.isFirstOne ? "8rem" : 0)};
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin-left: ${(props) => (props.isFirstOne ? "4rem" : 0)};
  }
`;

export const MainTitle = styled.h2`
  color: ${COLORS.white};
  text-transform: uppercase;
  font-size: 1rem;
  padding: 1rem 0;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
    margin: 0;
    padding: 1.5rem 0 0 1.5rem;
  }
`;

export const MainNavigationTab = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
    margin: 0;
    padding: 2rem;
  }
`;
export const NavigationTabList = styled.li`
  margin-bottom: 0.75rem;
`;

export const NavigationTab = styled(NavLink)<{ selectedTab?: boolean }>`
  text-decoration: none;
  text-transform: capitalize;
  color: ${(props) =>
    props.selectedTab ? `${COLORS.green}` : `${COLORS.beige}`};
`;
