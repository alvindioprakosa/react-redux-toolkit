import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">{count}</h1>
      <div className="flex gap-4">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
