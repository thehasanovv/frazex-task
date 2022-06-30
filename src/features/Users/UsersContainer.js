import * as React from "react";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import Spinner from "../../components/Spinner";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUsersData,
  fetchUsersPageData,
} from "../../store/actions/usersAction";

export const UsersContainer = () => {
  const [pages, setPages] = useState(1);
  const limit = 5;
  const datas = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const pageData = async () => {
    const skip = (pages - 1) * limit;
    dispatch(fetchUsersPageData({ limit, skip }));
  };

  const getData = async () => {
    dispatch(fetchUsersData({ limit }));
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
      {datas.isLoading ? <Spinner /> : <Table datas={datas?.users} />}
      {datas.pages && (
        <Pagination
          pages={pages}
          setPages={setPages}
          dataLength={datas.pages}
        />
      )}
    </>
  );
};
