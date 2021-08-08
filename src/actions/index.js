import jsonplaceholder from "../api/JsonPlaceHolder";
import _ from "lodash";

const FetchPostAndUser = () => async (dispatch, getState) => {
  await dispatch(fetchPost());
  console.log(getState().post);
  const userIds = new Set(getState().post.map(({ userId }) => userId));
  console.log(userIds);
  userIds.forEach((id) => dispatch(UserHeaderPost(id)));

  // _.chain(getState().post)
  //   .setMap((post) => post.userId)
  //   .forEach((id) => dispatch(UserHeaderPost(id)))
  //   .value();
};

const fetchPost = () => async (dispatch) => {
  const req = await jsonplaceholder.get(`/posts`);
  dispatch({ type: `FETCH_POST_REQUEST`, payload: req.data });
};

const UserHeaderPost = (id) => async (dispatch) => {
  const req = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: `FETCH_USER_HEADER`, payload: req.data });
};

// export const UserHeaderPost = (id) => (dispatch) => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const req = await jsonplaceholder.get(`/users/${id}`);
//   dispatch({ type: `FETCH_USER_HEADER`, payload: req.data });
// });

export { FetchPostAndUser, fetchPost, UserHeaderPost };
