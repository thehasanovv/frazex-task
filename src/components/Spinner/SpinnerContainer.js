import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Container } from "./SpinnetContainer.style";
export function Spinner() {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
}
