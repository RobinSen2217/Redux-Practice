//REDUX
// const initialCakeState = {
//   numOfCakes: 10,
// };

// function CakeReducer(state = initialCakeState, action) {
//   switch (action.type) {
//     case "CAKE_ORDERED":
//       return { ...state, numOfCakes: state.numOfCakes - 1 };
//     case "CAKE_RESTOCKED":
//       return { ...state, numOfCakes: state.numOfCakes + action.quantity };
//     default:
//       return state;
//   }
// }
// export default CakeReducer



//REDUX TOOLKIT
import { createSlice } from "@reduxjs/toolkit" 
const cakeSlice = createSlice({
  name: "cake",
  initialState: {
    numOfCakes: 10,
  },
  reducers: {
    orderCake: (state) => {  //action creator by name of 'orderCake' and action by name of 'cake/orderCake' created under the hood
      state.numOfCakes--;
    },
    restockCake: (state, action) => {   //action creator by name of 'restockCake' and action by name of 'cake/restockCake' created under the hood
      state.numOfCakes += action.payload;
    },
  },
})

// console.log(cakeSlice.actions)

export default cakeSlice