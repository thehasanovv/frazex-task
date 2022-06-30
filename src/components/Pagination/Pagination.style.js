import styled from "styled-components";
import { Pagination } from "@mui/material";

export const Container = styled.div`
  margin: 3rem 0;
`;

export const PaginationContainer = styled(Pagination)`
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    color: ${({ theme }) => theme.text};
    opacity: ${({ theme }) => theme.opacity};
  }

  & .Mui-selected {
    /* background-color: #05c3dd !important;
    opacity: 1; */
  }
`;
