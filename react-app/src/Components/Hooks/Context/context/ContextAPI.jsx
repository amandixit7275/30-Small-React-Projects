import React, { createContext } from "react";
import ChildA from "./ChildA";
const data = createContext();

//create,provider,consumer
export const data1 = createContext();

export default function ContextAPI() {
  const name = "Aman";
  const gender = "male";
  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <ChildA />
        </data1.Provider>
      </data.Provider>
    </div>
  );
}
export { data };
