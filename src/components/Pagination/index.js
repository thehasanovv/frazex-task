import Stack from "@mui/material/Stack";
import { Container, PaginationContainer } from "./Pagination.style";

const PaginationMUI = ({ pages, setPages, dataLength }) => {
  const handleChange = (p) => {
    setPages(p.textContent);
    const clicked = p.closest(`button`).firstChild;

    if (!p.textContent) {
      if (clicked.getAttribute("data-testid") === "NavigateNextIcon")
        setPages(+pages + 1);

      if (clicked.getAttribute("data-testid") === "NavigateBeforeIcon") {
        setPages(+pages - 1);
        if (+pages === 1) setPages(1);
      }
    }
  };

  return (
    <Container>
      <Stack spacing={2}>
        <PaginationContainer
          count={dataLength}
          color="primary"
          onChange={(e) => {
            handleChange(e.target);
          }}
        />
      </Stack>
    </Container>
  );
};

export default PaginationMUI;
