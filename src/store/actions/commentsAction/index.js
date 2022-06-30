import axios from "axios";
import { getComments, isLoading } from "../../slices/CommentsSlice";

export const fetchCommentsData = ({ limit }) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/comments`
      );
      const pageLength = Math.ceil(response.data.length / limit);
      const filteredData = response.data.slice(0, limit);
      dispatch(isLoading(false));
      dispatch(getComments({ filteredData, pageLength }));
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const fetchCommentsPageData = ({ skip, limit }) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?_start=${skip}&_limit=${limit}`
      );
      dispatch(isLoading(false));
      dispatch(getComments({ filteredData: response.data }));
    } catch (error) {
      console.log("error", error);
      dispatch(isLoading(false));
    }
  };
};
