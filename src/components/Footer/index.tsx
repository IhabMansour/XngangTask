import { FC, useEffect, useState } from "react";
import {
  FooterContainer,
  GridContainer,
  MainNavigationTab,
  MainTitle,
  NavigationTab,
  NavigationTabList,
} from "./style";
import { BOOKS_CATEGORIES, PAGES } from "../../constants";
import { Grid } from "@mantine/core";
import { useLocation } from "react-router-dom";

const Footer: FC = () => {
  const location = useLocation();
  const [currentUrl, setCurrentUrl] = useState<string>(location.pathname);

  useEffect(() => {
    setCurrentUrl(location.pathname);
  }, [location.pathname]);

  return (
    <FooterContainer>
      <Grid m={0} align="stretch">
        <Grid.Col p={0} sm={3} md={3}>
          <GridContainer isFirstOne>
            <MainTitle>navigation</MainTitle>
            <MainNavigationTab>
              {PAGES.map((page) => (
                <NavigationTabList key={page.menuID}>
                  <NavigationTab
                    selectedTab={currentUrl === page.menuLink}
                    to={page.menuLink}>
                    {page.label}
                  </NavigationTab>
                </NavigationTabList>
              ))}
            </MainNavigationTab>
          </GridContainer>
        </Grid.Col>

        <Grid.Col p={0} sm={6} md={6}>
          <GridContainer>
            <MainTitle>categories</MainTitle>
            <MainNavigationTab>
              <Grid m={0}>
                {BOOKS_CATEGORIES.map((category) => (
                  <Grid.Col key={category.childID} p={0} sm={6} md={4}>
                    <NavigationTabList>
                      <NavigationTab
                        selectedTab={
                          currentUrl === `/books${category.childItemLink}`
                        }
                        to={`/books${category.childItemLink}`}>
                        {category.label}
                      </NavigationTab>
                    </NavigationTabList>
                  </Grid.Col>
                ))}
              </Grid>
            </MainNavigationTab>
          </GridContainer>
        </Grid.Col>

        <Grid.Col p={0} sm={3} md={3}>
          <GridContainer isLastOne>
            <MainTitle>follow us</MainTitle>
            <MainNavigationTab>
              <NavigationTabList>
                <NavigationTab to="https://www.facebook.com" target="_blank">
                  facebook
                </NavigationTab>
              </NavigationTabList>

              <NavigationTabList>
                <NavigationTab to="https://www.twitter.com" target="_blank">
                  twitter
                </NavigationTab>
              </NavigationTabList>

              <NavigationTabList>
                <NavigationTab to="https://www.rss.com" target="_blank">
                  RSS
                </NavigationTab>
              </NavigationTabList>
            </MainNavigationTab>
          </GridContainer>
        </Grid.Col>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
