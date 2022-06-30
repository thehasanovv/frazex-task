import styled from "styled-components";

export const Container = styled.header`
  height: 3.56rem;
  background-color: #05c3dd;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  justify-content: space-between;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  margin-bottom: 1.5rem;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 0;
`;

export const ListItem = styled.li`
  margin-right: 1rem;
  & a {
    color: white;
  }
`;

export const Toggle = styled.div`
  cursor: pointer;
  svg {
    color: white;
  }
`;
