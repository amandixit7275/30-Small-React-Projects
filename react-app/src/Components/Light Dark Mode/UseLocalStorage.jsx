import React from "react";
import { useState, useEffect } from "react";

export default function UseLocalStorage({ key, defaultValue }) {
  function storage() {
    let currentValue;
    try {
      currentValue = JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.log(error.message);
      currentValue = defaultValue;
    }
    return currentValue;
  }
  const [value, setValue] = useState(storage);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
