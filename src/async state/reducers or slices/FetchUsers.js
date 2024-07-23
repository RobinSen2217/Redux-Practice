//REDUX
// const initialState = {
//   loading: false,
//   users: [],
//   error: "",
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case "FETCH_USERS_REQUESTED":
//       return { ...state, loading: true };
//     case "FETCH_USER_SUCCEEDED":
//       return {
//         loading: false,
//         users: action.payload,
//         error: "",
//       };
//     case "FETCH_USER_FAILED":
//       return {
//         loading: false,
//         users: [],
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

//REDUX TOOLKIT
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try{
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data.map((user) => user); //return value of each callback of map is added to an array which is finally returned by the map function
  }catch (err) {
    console.log(err)
    return rejectWithValue(err)
  }
});
const userSlice = createSlice({
  name: "users",
  initialState: {
    loading: true,
    users: [],
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export { userSlice, fetchUsers };
