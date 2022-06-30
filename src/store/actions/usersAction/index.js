import axios from "axios";
import { getUsers, isLoading } from "../../slices/UsersSlice";

export const fetchUsersData = ({ limit }) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const pageLength = Math.ceil(response.data.length / limit);
      const filteredData = response.data
        .map((d) => {
          return {
            ...d,
            address: d.address.street,
            company: d.company.name,
          };
        })
        .slice(0, limit);
      dispatch(isLoading(false));
      dispatch(getUsers({ filteredData, pageLength }));
    } catch (error) {
      console.log("error", error);
      dispatch(isLoading(false));
    }
  };
};

export const fetchUsersPageData = ({ skip, limit }) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users?_start=${skip}&_limit=${limit}`
      );
      const filteredData = response.data.map((d) => {
        return {
          ...d,
          address: d.address.street,
          company: d.company.name,
        };
      });
      dispatch(getUsers({ filteredData }));
      setTimeout(() => {
        dispatch(isLoading(false));
      }, 700);
    } catch (error) {
      console.log("error", error);
      dispatch(isLoading(false));
    }
  };
};
