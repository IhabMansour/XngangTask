import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #2f2f2f;
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
  border-bottom: ${(props) => (props.isLastOne ? "none" : "1px solid #000000")};

  @media screen and (min-width: 768px) {
    border-bottom: none;
    border-left: 1px solid #000000;
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
  color: #ffffff;
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
  color: ${(props) => (props.selectedTab ? "#89c33c" : "#9f9696")};
`;
