import React from "react";
import { useState, useEffect } from "react";
import "./style.css";

export default function LoadMoreData() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setloading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  async function fetchProducts() {
    setloading(true);
    try {
      let response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      let data = await response.json();
      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setloading(false);
      }
    } catch (e) {
      console.log(e.message);
      setloading(false);
    }
  }
  useEffect(() => {
    if (products && products.length === 100) {
      setDisabled(true);
    }
  });

  useEffect(() => {
    fetchProducts();
  }, [count]);
  if (loading) {
    return <h2>Loading data ! Please wait ...</h2>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => {
              return (
                <div className="product" key={item}>
                  <img src={item.thumbnail} alt={item.title} />
                  <p>{item.thumbnail}</p>
                </div>
              );
            })
          : null}
      </div>
      <div className="button">
        <button disabled={disabled} onClick={() => setCount(count + 1)}>
          Load More Data
        </button>
      </div>
      {disabled && <h3>You have reached the maximum limit</h3>}
    </div>
  );
}
