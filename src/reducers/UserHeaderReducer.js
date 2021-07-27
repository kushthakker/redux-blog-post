export const UserHeaderReducer = (request = [], action) => {
  switch (action.type) {
    case "FETCH_USER_HEADER":
      return [...request, action.payload];
    default:
      return request;
  }
};
