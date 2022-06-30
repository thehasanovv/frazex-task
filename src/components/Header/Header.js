import React from "react";
import TogglerBtn from "../DarkMode/Toggler";
import { NavLink } from "react-router-dom";
import { Container, List, ListItem, Toggle } from "./Header.styled";

const Header = ({ themeToggler, theme }) => {
  return (
    <Container>
      <List>
        <ListItem>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "isActive" : "")}
          >
            Users
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to="/comments"
            className={({ isActive }) => (isActive ? "isActive" : "")}
          >
            Comments
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to="/posts"
            className={({ isActive }) => (isActive ? "isActive" : "")}
          >
            Posts
          </NavLink>
        </ListItem>
      </List>
      <Toggle>
        <TogglerBtn toggleTheme={themeToggler} theme={theme} />
      </Toggle>
    </Container>
  );
};

export default Header;
