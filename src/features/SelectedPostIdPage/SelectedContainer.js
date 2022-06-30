import axios from "axios";
import Table from "../../components/Table";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const SelectedContainer = () => {
  const [datas, setDatas] = useState();
  const { id } = useParams();

  const getData = async () => {
    const datas = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    setDatas(datas.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Table datas={datas} />
    </>
  );
};
