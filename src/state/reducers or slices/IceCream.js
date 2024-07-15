//REDUX
// const initialIceCreamState = {
//     numOfIceCreams: 10,
//   };

//   function IceCreamReducer(state = initialIceCreamState, action) {
//     switch (action.type) {
//       case 'BUY_ICECREAM':
//         return { ...state, numOfIceCreams: state.numOfIceCreams - 1 };

//       default:
//         return state;
//     }
//   }
// export default IceCreamReducer

//REDUX TOOLKIT
import { createSlice } from "@reduxjs/toolkit";
import cakeSlice from "./Cake.js";

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState: {
    numOfIceCreams: 10,
  },
  reducers: {
    orderIceCream: (state) => {
      //action creator by name of 'buyIceCream' and action by name of 'icecream/buyIceCream' created under the hood
      state.numOfIceCreams--;
    },
    restockIceCream: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeSlice.actions.orderCake, (state) => {
      state.numOfIceCreams--;
    });
  },
});
export default iceCreamSlice;
