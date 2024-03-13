import React from "react";
import { data, data1 } from "./ContextAPI";

export default function ChildC() {
  return (
    <>
      <h2>Here We are using context api i.e Consumer</h2>
      <data.Consumer>
        {(name) => {
          return (
            <data1.Consumer>
              {(gender) => {
                return (
                  <h3>
                    My name is {name} and my gender is {gender}
                  </h3>
                );
              }}
            </data1.Consumer>
          );
        }}
      </data.Consumer>
    </>
  );
}
