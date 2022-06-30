import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Toggle = ({ toggleTheme, theme }) => {
  return (
    <Button onClick={toggleTheme}>
      {theme === "light" ? <Brightness7Icon /> : <Brightness4Icon />}
    </Button>
  );
};

const Button = styled.div`
  cursor: pointer;
`;

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
