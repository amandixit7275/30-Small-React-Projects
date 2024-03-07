import React from "react";
import MenuItem from "./MenuItem";
import "./style.css";

export default function MenuList({ list = [] }) {
  console.log(list);
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((listItem) => {
            return <MenuItem item={listItem} />;
          })
        : null}
    </ul>
  );
}
