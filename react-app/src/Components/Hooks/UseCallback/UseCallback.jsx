import React, { useCallback, useState } from "react";
import ChildA from "./ChildA";

const UseCallback = () => {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);

  //useCallBack hook
  const Learning = useCallback(
    {
      //some work done
    },
    [count]
  );
  return (
    <div>
      <h5>Learning UseCallback</h5>
      <h2>{add}</h2>
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <ChildA learning={Learning} count={count} />
      <br />
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 2)}>Increase By 2</button>
    </div>
  );
};

export default UseCallback;
