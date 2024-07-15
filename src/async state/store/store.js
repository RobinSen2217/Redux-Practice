import { configureStore } from "@reduxjs/toolkit";
// import {
//   fetchUsersRequest,
//   fetchUsersSuccess,
//   fetchUsersFailure,
// } from "../async action creators";
import {userSlice, fetchUsers } from "../reducers or slices/FetchUsers.js";

const store = configureStore({
  reducer: userSlice.reducer,
});


const unsubscribe = store.subscribe(() => {
  //.subscribe() returns the unsubscribe function
  console.log("Updated state: ", store.getState()); //executed every time state is updated
});

store.dispatch(fetchUsers());
// unsubscribe()