import React from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import "./style.css";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, sethover] = useState(0);
  function handleClick(currenIndex) {
    setRating(currenIndex);
  }

  function handleMouseEnter(currentIndex) {
    sethover(currentIndex);
  }
  function handleMouseLeave() {
    sethover(rating);
  }
  console.log(hover, rating);

  return (
    <div>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (rating || hover) ? "active" : "inactive"}
            key="index"
            onclick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}
