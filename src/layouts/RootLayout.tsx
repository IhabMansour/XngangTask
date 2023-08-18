import { FC } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { LayoutContainer, MainContainer } from "./style";

const RootLayout: FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </LayoutContainer>
  );
};

export default RootLayout;
