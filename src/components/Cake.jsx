import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cakeSlice from "../state/reducers or slices/Cake.js";
import { useState } from "react";
function Cake() {
  const [restockValue, setRestockValue] = useState(1);
  const cakes = useSelector((state) => state.cake.numOfCakes);
  const { orderCake, restockCake } = cakeSlice.actions;
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-2xl font-semibold">Number of cakes - {cakes}</h2>
      <button
        type="button"
        onClick={() => {
          dispatch(orderCake());
        }}
        className="bg-gray-300 rounded-md py-1 px-2 mr-3 hover:bg-gray-400 transition-colors duration-150"
      >
        Order Cake
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(restockCake(restockValue));
          setRestockValue(1);
        }}
        className="bg-gray-300 rounded-md py-1 px-2 hover:bg-gray-400 transition-colors duration-150"
      >
        Restock Cakes
      </button>
      <input
        type="number"
        min="1"
        aria-controls
        className="w-10 text-xl border-2 ml-3 border-slate-500 text-center"
        value={restockValue}
        onChange={(e) => {
          setRestockValue(parseInt(e.target.value));
        }}
      />
    </div>
  );
}

export default Cake;
