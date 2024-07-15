import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../async state/reducers or slices/FetchUsers";
function User() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const userState = useSelector((state) => state.user);
  return (
    <div>
      <h2 className="text-2xl font-semibold">List of Users</h2>
      {userState.loading && <div>Loading</div>}
      {!userState.loading && userState.error && <div>{userState.error}</div>}
      {!userState.loading && userState.users && (
        <div>
          {userState.users.map((user, ind) => {
            return <div key={ind}>{user.name}</div>;
          })}
        </div>
      )}
      {!userState.loading && !userState.users.length && !userState.error && (
        <div>No users yet.</div>
      )}
      <div></div>
    </div>
  );
}

export default User;
