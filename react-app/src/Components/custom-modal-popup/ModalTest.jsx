import React from "react";
import { useState } from "react";
import Modal from "./Modal";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);
  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }
  function onClose() {
    setShowModalPopup(!showModalPopup);
  }
  return (
    <div>
      <button onClick={handleToggleModalPopup}>Show Modal Popup</button>
      {showModalPopup && (
        <Modal
          header={<h1>Customized Header</h1>}
          body={<p>Customized Body</p>}
          footer={<h3>Customized Footer</h3>}
          onClose={onClose}
        />
      )}
    </div>
  );
}
