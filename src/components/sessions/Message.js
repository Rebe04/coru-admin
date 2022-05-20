import React, { useState } from "react";

export default function Message(props) {
  const [screenData, setScreenData] = useState({
    message: "",
  });

  const message = (e) => {
    setScreenData({ ...screenData, message: e.target.value });
  };

  const createNewScreen = (e) => {
    e.preventDefault();
    props.callBack(screenData);
    setScreenData({
      message: "",
    });
  };
  return (
    <>
      <h4 className="mb-4">Screen | Type: Message</h4>
      <div className="form-group mb-4">
        <label forhtml="exampleFormControlTextarea1">Message</label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          rows="3"
          onChange={message}
          value={screenData.message}
          style={{ height: "105px" }}
        ></textarea>
      </div>
      <div className="d-flex justify-content-end">
        <button
          onClick={createNewScreen}
          type="button"
          className="btn btn-success"
        >
          Add Screen
        </button>
      </div>
    </>
  );
}
