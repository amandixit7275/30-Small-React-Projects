import React from "react";
import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

function ImageSlider({ url, page = 1, limit = 5 }) {
  const [images, setimages] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const [currentSlide, setcurrentSlide] = useState(0);

  async function fetchImages() {
    setloading(true);
    try {
      let response = await fetch(`${url}list?page=${page}&limit=${limit}`);
      let data = await response.json();
      if (data) {
        setimages(data);
        setloading(false);
      }
    } catch (e) {
      seterror(e.message);
      setloading(false);
    }
  }
  console.log(images);

  if (loading) {
    return <h1>Loading Please wait...</h1>;
  }

  useEffect(() => {
    if (url !== null) {
      fetchImages();
    }
  }, [url]);
  function handlePrevious() {
    setcurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setcurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItem, index) => {
            return (
              <img
                key={imageItem.id}
                src={imageItem.download_url}
                alt={imageItem.download_url}
                className={
                  currentSlide === index
                    ? "current-image"
                    : "current-image hide-current-image"
                }
              />
            );
          })
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => {
              return (
                <button
                  key={index}
                  className={
                    currentSlide === index
                      ? "current-indicator"
                      : "current-indicator inactive-indicator"
                  }
                  onClick={() => setcurrentSlide(index)}
                ></button>
              );
            })
          : null}
      </span>
    </div>
  );
}

export default ImageSlider;
