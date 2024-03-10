import React from "react";
import { useState, useEffect } from "react";
import "./style.css";

export default function ScrollIndicator({ url }) {
  const [data, Setdata] = useState([]);
  const [loading, Setloading] = useState(false);
  const [errorMessage, SeterrorMessage] = useState();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(url) {
    Setloading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data && data.products && data.products.length) {
        Setdata(data.products);
        Setloading(false);
      }
    } catch (error) {
      SeterrorMessage(error.message);
      Setloading(false);
    }
  }
  console.log(data);

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    // console.log(
    //   `howMuchScrolled =  document.body.scrollTop :  ${document.body.scrollTop},
    //   howMuchScrolled = document.documentElement.scrollTop : ${
    //     document.documentElement.scrollTop
    //   },
    //   document.documentElement.scrollHeight : ${
    //     document.documentElement.scrollHeight
    //   },
    //   document.documentElement.clientHeight : ${
    //     document.documentElement.clientHeight
    //   },
    //   Height = ${
    //     document.documentElement.scrollHeight -
    //     document.documentElement.clientHeight
    //   }

    //   } `
    // );
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (loading) {
    return <h2>Loading ! Please wait !</h2>;
  }
  if (errorMessage) {
    return <h2>There is some error. Please try after some time..</h2>;
  }
  console.log(scrollPercentage);

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => {
              return <p>{dataItem.title}</p>;
            })
          : null}
      </div>
    </div>
  );
}
