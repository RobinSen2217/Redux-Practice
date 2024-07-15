import { bindActionCreators, configureStore } from "@reduxjs/toolkit";
import { orderCake, restockCake } from "../action-creators/index.js";
import { buyIceCream } from "../action-creators/index.js";
// import CakeReducer from "../reducers/Cake.js";
// import IceCreamReducer from "../reducers/IceCream.js";
import pkg from "redux-logger";


const { createLogger } = pkg;

//REDUX
// const store = configureStore({
//   reducer: {
//     //created root reducer by combining 2 reducers
//     cake: CakeReducer,
//     iceCream: IceCreamReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(createLogger()), //added logger middleware
// }); //redux store created

//REDUX TOOLKIT
import cakeSlice from '../reducers or slices/Cake.js'
import iceCreamSlice from "../reducers or slices/IceCream.js";
import {userSlice, fetchUsers } from "../../async state/reducers or slices/FetchUsers.js";

const store = configureStore({
  reducer: {
    //created root reducer by combining 2 reducers
    cake: cakeSlice.reducer,
    iceCream: iceCreamSlice.reducer,
    user:userSlice.reducer
  }, 
  // middleware: (getDefaultMiddleware) =>
  //       getDefaultMiddleware().concat(createLogger())

}); 

const unsubscribe = store.subscribe(() => {
  //.subscribe() returns the unsubscribe function
  console.log("Updated state: ", store.getState()); //executed every time state is updated
});
// store.dispatch(orderCake());  //passing action creator as parameter that in turn returns an action
// store.dispatch(orderCake());
// store.dispatch(buyIceCream());
// store.dispatch(restockCake(2));
// const actions = bindActionCreators(
//   //allows to invoke/dispatch actions directly without using store.dispatch each time
//   { orderCake, buyIceCream, restockCake },
//   store.dispatch
// );
const cakeActions=cakeSlice.actions  //action-creators taken from cakeSlice object
const iceCreamActions=iceCreamSlice.actions   //action-creators taken from iceCreamSlice object
// store.dispatch(cakeActions.orderCake());
// store.dispatch(cakeActions.orderCake());
// store.dispatch(iceCreamActions.buyIceCream());
// store.dispatch(cakeActions.restockCake(2));
// store.dispatch(iceCreamActions.restockIceCream(2));
// store.dispatch(fetchUsers());
// unsubscribe();


export default store