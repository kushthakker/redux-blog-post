import jsonplaceholder from "../api/JsonPlaceHolder";
import _ from "lodash";

// export const FetchPostAndUser = () => async (dispatch, getState) => {
//   await dispatch(fetchPost());
//   console.log(getState().post);
// };

export const fetchPost = () => async (dispatch) => {
  const req = await jsonplaceholder.get(`/posts`);
  dispatch({ type: `FETCH_POST_REQUEST`, payload: req.data });
};

// export const UserHeaderPost = (id) => async (dispatch) => {
//   const req = await jsonplaceholder.get(`/users/${id}`);
//   dispatch({ type: `FETCH_USER_HEADER`, payload: req.data });
// };

export const UserHeaderPost = (id) => (dispatch) => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const req = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: `FETCH_USER_HEADER`, payload: req.data });
});
