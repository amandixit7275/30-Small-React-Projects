import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);
  const mulplication = useMemo(
    function Multiply() {
      console.log("***");
      return add * 100;
    },
    [add]
  );
  function Multiply() {
    console.log("***");
    return add * 100;
  }
  return (
    <div>
      {mulplication}
      <br />
      {add}
      <button onClick={() => setAdd(add + 1)}>Add</button>
      <br />
      {minus}
      <button onClick={() => setMinus(minus - 1)}>Substraction</button>
    </div>
  );
};

export default UseMemo;
