import React, { useState } from "react";

export default function Presentation(props) {
  const [screenData, setScreenData] = useState({
    title: props.title,
    description: props.description,
  });

  const title = (e) => {
    setScreenData({ title: e.target.value });
  };
  const description = (e) => {
    setScreenData({ ...screenData, description: e.target.value });
  };

  const createNewScreen = (e) => {
    e.preventDefault();
    props.callBack(screenData);
    setScreenData({
      title: "",
      description: "",
    });
  };

  return (
    <>
      <h4 className="mb-4">Screen | Type: presentation</h4>
      <div className="form-group mb-4">
        <label className="control-label">Title</label>
        <input
          type="text"
          name="title"
          onChange={title}
          id="title"
          value={screenData.title}
          className="form-control"
        />
      </div>
      <div className="form-group mb-4">
        <label forhtml="exampleFormControlTextarea1">Description</label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          rows="3"
          onChange={description}
          value={screenData.description}
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
