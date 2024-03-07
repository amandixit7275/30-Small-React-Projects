import React from "react";
import MenuList from "./MenuList";
import { useState } from "react";
import "./style.css";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [diplayCurrentChildren, setdiplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setdiplayCurrentChildren({
      ...diplayCurrentChildren,
      [getCurrentLabel]: !diplayCurrentChildren[getCurrentLabel],
    });
  }
  console.log(diplayCurrentChildren);
  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>

        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {diplayCurrentChildren[item.label] ? <FaMinus /> : <FaPlus />}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length &&
      diplayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
