export const PostReducer = (request = [], action) => {
  switch (action.type) {
    case "FETCH_POST_REQUEST":
      return action.payload;
    default:
      return request;
  }
};
