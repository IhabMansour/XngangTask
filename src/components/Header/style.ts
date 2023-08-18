import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "@/theme/colors";

export const HeaderContainer = styled.header`
  background: ${COLORS.green};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  @media screen and (min-width: 1024px) {
    padding: 1rem 8rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 1rem 4rem;
  }
`;

export const MobileMenuTab = styled.div`
  height: 1.5rem;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  padding: 0;
`;

export const HeaderTitle = styled(NavLink)`
  text-decoration: none;
  color: ${COLORS.white};
  font-size: 0.75rem;
  & h1 {
    margin: 0;
  }
  span {
    font-weight: 300;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    padding: 0 1rem 0 0;
  }
`;

export const DesktopMainTabs = styled.nav`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MainTabContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const MainTab = styled(NavLink)<{
  selectedTab: boolean;
  isMobile?: boolean;
}>`
  color: ${(props) =>
    props.isMobile
      ? props.selectedTab
        ? `${COLORS.green}`
        : `${COLORS.black}`
      : props.selectedTab
      ? `${COLORS.black}`
      : `${COLORS.white}`};
  font-size: 1rem;
  font-weight: 500;
  line-height: 0.5rem;
  text-transform: uppercase;
  text-decoration: none;
`;
