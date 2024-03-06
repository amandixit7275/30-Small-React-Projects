import React from "react";
import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function ImageSlider({ url, page =1
  , limit =5 }) {
  const [images, setimages] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const [currentSlide, setcurrentSlide] = useState(0)

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

  return (
    <div className="container">
      <BsArrowLeftCircleFill className="arrow arrow-left" />
      {images && images.length > 0
        ? images.map((imageItem, index) => {
            return (
              <img
                key={index}
                className="current-image"
                src={imageItem.download_url}
                alt={imageItem.download_url}
              />
            );
          })
        : null}
      <BsArrowRightCircleFill className="arrow arrow-right" />
      {images && images.length > 0
        ? images.map((_, index) => {
            <button key={index}

            onClick={() => }
            ></button>;
          })
        : null}
    </div>
  );
}

export default ImageSlider;
