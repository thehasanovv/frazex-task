import axios from "axios";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import { useState, useEffect } from "react";

export const PostsContainer = () => {
  const [datas, setDatas] = useState();
  const [pages, setPages] = useState(0);
  const [dataLength, setDataLength] = useState();
  const limit = 5;

  const pageData = async () => {
    const skip = (pages - 1) * limit;
    const datas = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_start=${skip}&_limit=${limit}`
    );
    setDatas(datas.data);
  };

  const getData = async () => {
    const datas = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/"
    );
    setDataLength(Math.ceil(datas.data.length / limit));
    setDatas(datas.data.slice(0, limit));
  };

  useEffect(() => {
    if (!dataLength) {
      getData();
      return;
    }
    pageData();
  }, [pages]);

  return (
    <>
      <Table datas={datas} />
      <Pagination pages={pages} setPages={setPages} dataLength={dataLength} />
    </>
  );
};
