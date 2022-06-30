import Table from "react-bootstrap/Table";
import { Container, THead, Th, Td } from "./Table.style";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function BasicExample({ datas }) {
  const [columns, setColumn] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const getCommentsIdHandler = (id) => {
    if (pathname !== "/posts") return;
    navigate(`/posts/${id}/comments`, { replace: true });
  };

  useEffect(() => {
    datas?.length &&
      setColumn(
        Object.keys(datas[0]).map((key) => {
          return {
            id: key,
            label: key,
          };
        })
      );
  }, [datas]);

  return (
    <Container>
      <Table striped responsive hover>
        <THead>
          <tr>
            {columns?.map((column) => (
              <Th key={column.id}>{column.label}</Th>
            ))}
          </tr>
        </THead>
        <tbody>
          {datas?.map((data) => (
            <tr key={data.id}>
              {columns.map((column) => {
                const value = data[column.id];
                return (
                  <td
                    key={column.id}
                    onClick={getCommentsIdHandler.bind(null, data.id)}
                  >
                    {value.length > 30 ? `${value.slice(0, 100)}...` : value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default BasicExample;
