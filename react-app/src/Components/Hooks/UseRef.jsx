import React, { useRef, useState } from "react";

const UseRef = () => {
  const [name, setName] = useState("");
  const refElement = useRef();
  console.log(refElement);

  function handleClick() {
    refElement.current.focus();

    setName("");
  }
  function handleInput() {
    refElement.current.style.color = "green";
    refElement.current.focus();
  }
  return (
    <div>
      <input
        ref={refElement}
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={handleClick}>Reset</button>
      <button onClick={handleInput}>Change the Color</button>
    </div>
  );
};

export default UseRef;
