import { FC, useEffect, useState } from "react";
import { Menu } from "@mantine/core";
import { Search, Menu2, CaretDown } from "tabler-icons-react";
import { useLocation } from "react-router-dom";

import {
  DesktopMainTabs,
  HeaderContainer,
  HeaderContent,
  HeaderTitle,
  MainTab,
  MainTabContainer,
  MenuButton,
  MobileMenuTab,
} from "./style";

import { PAGES } from "../../constants";

const Header: FC = () => {
  let location = useLocation();
  const [opened, setOpened] = useState<boolean>(false);
  const [currentUrl, setCurrentUrl] = useState<string>(location.pathname);

  useEffect(() => {
    setCurrentUrl(location.pathname);
  }, [location]);

  return (
    <HeaderContainer>
      <MobileMenuTab>
        <Menu opened={opened} onChange={setOpened}>
          <Menu.Target>
            <MenuButton>
              <Menu2 size={30} strokeWidth={2} color="#FFFFFF" />
            </MenuButton>
          </Menu.Target>

          <Menu.Dropdown>
            {PAGES.map((item) => (
              <Menu.Item key={item.menuID}>
                <MainTab
                  isMobile
                  selectedTab={currentUrl === item.menuLink}
                  to={item.menuLink}>
                  {item.label}
                </MainTab>
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      </MobileMenuTab>

      <HeaderContent>
        <HeaderTitle>
          Books<span>Reviews</span>
        </HeaderTitle>

        <DesktopMainTabs>
          {PAGES.map((item) => (
            <MainTabContainer>
              <MainTab
                key={item.menuID}
                selectedTab={currentUrl === item.menuLink}
                to={item.menuLink}>
                {item.label}
              </MainTab>

              {currentUrl === item.menuLink && (
                <CaretDown size={10} strokeWidth={5} color="#000000" />
              )}
            </MainTabContainer>
          ))}
        </DesktopMainTabs>
      </HeaderContent>

      <div>
        <Search size={20} strokeWidth={2} color="#FFFFFF" />
      </div>
    </HeaderContainer>
  );
};

export default Header;
