import React from "react";
import data from "./data";
import "./style.css";
import { useState } from "react";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(selected === getCurrentId ? null : getCurrentId);
  }
  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const getCurrentIndexid = cpyMultiple.indexOf(getCurrentId);
    if (getCurrentIndexid === -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(getCurrentIndexid, 1);
    }
    setMultiple(cpyMultiple);
  }

  return (
    <div>
      <div className="wrapper">
        <button
          onClick={() => setEnableMultiSelection(!enableMultipleSelection)}
        >
          Enable Multiple Selection
        </button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => {
              return (
                <div
                  onClick={
                    enableMultipleSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="item"
                >
                  <div className="title">
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                  </div>
                  {enableMultipleSelection
                    ? multiple.indexOf(dataItem.id) !== -1 && (
                        <div className="content">{dataItem.answer}</div>
                      )
                    : selected === dataItem.id && (
                        <div className="content">{dataItem.answer}</div>
                      )}
                </div>
              );
            })
          ) : (
            <h2>No Data Found ! </h2>
          )}
        </div>
      </div>
    </div>
  );
}
