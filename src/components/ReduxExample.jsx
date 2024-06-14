
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../rtkit/slice/counterSlice";
import { useEffect } from "react";

const ReduxExample = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.counter);

  useEffect(()=>{
    console.log("counter is changing from the app.jsx")
  },[counter]);
  return (
    <div>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        {counter}
      </div>
    </div>
  );
};

export default ReduxExample;
