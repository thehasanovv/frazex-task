import React from "react";
import Header from "../Header";
import { Container } from "./Layout.style";

const Layout = ({ children, themeToggler, theme }) => {
  return (
    <Container>
      <Header themeToggler={themeToggler} theme={theme} />
      {children}
    </Container>
  );
};

export default Layout;
