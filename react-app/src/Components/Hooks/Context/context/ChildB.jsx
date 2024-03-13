import React, { useContext } from "react";
import ChildC from "./ChildC";
import { data, data1 } from "./ContextAPI";

export default function ChildB() {
  const name = useContext(data);
  const gender = useContext(data1);

  return (
    <div>
      <h4>Hello I am Component B</h4>
      <h5>
        My name is {name} and my gender is {gender}{" "}
      </h5>
      <ChildC />
    </div>
  );
}
