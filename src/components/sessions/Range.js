import React, { useState } from "react";

export default function Range(props) {
  const [screenData, setScreenData] = useState({
    min: "",
    max: "",
    question: "",
  });

  const max = (e) => {
    setScreenData({ ...screenData, max: e.target.value });
  };

  const question = (e) => {
    setScreenData({ ...screenData, question: e.target.value });
  };

  const min = (e) => {
    setScreenData({ ...screenData, min: e.target.value });
  };

  const createNewScreen = (e) => {
    e.preventDefault();
    props.callBack(screenData);
    setScreenData({
      min: "",
      max: "",
      question: "",
    });
  };
  return (
    <>
      <h4 className="mb-4">Screen | Type: Range</h4>
      <div className="form-row mb-lg-4">
        <div className="form-group col-md-3">
          <label forhtml="min" className="control-label">
            Min
          </label>
          <input
            type="text"
            name="min"
            onChange={min}
            id="min"
            value={screenData.min}
            className="form-control"
          />
        </div>
        <div className="form-group col-md-6 px-5">
          <input type="range" name="range" className="form-control" />
        </div>
        <div className="form-group col-md-3">
          <label forhtml="max" className="control-label">
            Max
          </label>
          <input
            type="text"
            name="max"
            onChange={max}
            id="max"
            value={screenData.max}
            className="form-control"
          />
        </div>
      </div>
      <div className="form-group mb-4">
        <label forhtml="question">Question</label>
        <textarea
          className="form-control"
          name="question"
          onChange={question}
          id="question"
          value={screenData.question}
          rows="3"
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
