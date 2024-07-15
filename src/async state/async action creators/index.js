//async fetch action creators for REDUX(NOT REQUIRED FOR REDUX TOOLKIT)
const fetchUsersRequest = () => {
  return {
    type: "FETCH_USERS_REQUESTED",
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: "FETCH_USERS_SUCCEEDED",
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: "FETCH_USERS_FAILED",
    payload: error,
  };
};

export { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure };
