import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import iceCreamSlice from "../state/reducers or slices/IceCream.js";
function IceCream() {
  const [restockValue, setRestockValue] = useState(1);
  const iceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const { orderIceCream, restockIceCream } = iceCreamSlice.actions;
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className="text-2xl font-semibold">
        Number of ice creams - {iceCreams}
      </h2>
      <button
        type="button"
        onClick={() => {
          dispatch(orderIceCream());
        }}
        className="bg-gray-300 rounded-md py-1 px-2 mr-3 hover:bg-gray-400 transition-colors duration-150"
      >
        Order Ice Cream
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(restockIceCream(restockValue));
          setRestockValue(1);
        }}
        className="bg-gray-300 rounded-md py-1 px-2 opacity-100 hover:bg-gray-400 transition-colors duration-150"
      >
        Restock Ice Creams
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

export default IceCream;
