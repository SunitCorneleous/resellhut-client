export const config = {
  headers: {
    authorization: `bearer ${localStorage.getItem("accessToken")}`,
  },
};
