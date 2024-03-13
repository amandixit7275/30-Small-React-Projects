import React, { memo } from "react";

const ChildA = ({ learning, count }) => {
  console.log("Component Successfully called");
  return <div></div>;
};

export default memo(ChildA);
