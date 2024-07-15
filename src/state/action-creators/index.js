//cake action creators for REDUX(NOT REQUIRED FOR REDUX TOOLKIT)
function orderCake() {
  return {
    //action object
    type: "CAKE_ORDERED",
    quantity: 1,
  };
}

function restockCake(qty = 1) {
  //default restock quantity = 1
  return {
    //action object
    type: "CAKE_RESTOCKED",
    quantity: qty,
  };
}

//ice cream action creators
function buyIceCream() {
  return {
    //action object
    type: "BUY_ICECREAM",
    info: "buy ice cream action",
  };
}
export { orderCake, restockCake, buyIceCream };
