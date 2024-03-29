import React from "react";
import QRCode from "react-qr-code";
import { useState } from "react";
import "./style.css";

export default function QrCode() {
  const [input, setInput] = useState("");
  const [QrCode, setQrCode] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }
  function handleEnterPress(e) {
    if (e.keyCode === 13) {
      setQrCode(input);
      setInput(" ");
    }
  }

  return (
    <div className="container">
      <h1>QR Code Generator</h1>
      <input
        size={30}
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter the value to Generate"
        value={input}
        name="qr-code"
        onKeyDown={handleEnterPress}
      />
      <button
        className="QRbutton"
        disabled={input && input.trim() !== "" ? false : true}
        onClick={() => handleGenerateQrCode()}
      >
        Generate
      </button>
      <QRCode id="qr-code-value" value={QrCode} size={400} bgColor="#fff" />
    </div>
  );
}
