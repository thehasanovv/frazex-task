import * as React from "react";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import Spinner from "../../components/Spinner";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCommentsData,
  fetchCommentsPageData,
} from "../../store/actions/commentsAction";

export const CommentsContainer = () => {
  const [pages, setPages] = useState(1);
  const limit = 5;
  const datas = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  const pageData = async () => {
    const skip = (pages - 1) * limit;
    dispatch(fetchCommentsPageData({ limit, skip }));
  };

  const getData = async () => {
    dispatch(fetchCommentsData({ limit }));
  };

  useEffect(() => {
    if (datas.pages === null) {
      getData();
      return;
    }
    pageData();
  }, [pages]);

  return (
    <>
      {datas.isLoading ? <Spinner /> : <Table datas={datas?.comments} />}
      {datas.pages && (
        <Pagination
          setPages={setPages}
          pages={pages}
          dataLength={datas.pages}
        />
      )}
    </>
  );
};
