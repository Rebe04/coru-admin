import React, { useState } from "react";

export default function Question(props) {
  const [screenData, setScreenData] = useState({
    question: "",
    description: "",
  });

  const question = (e) => {
    setScreenData({ question: e.target.value });
  };
  const description = (e) => {
    setScreenData({ ...screenData, description: e.target.value });
  };

  const createNewScreen = (e) => {
    e.preventDefault();
    props.callBack(screenData);
    setScreenData({
      question: "",
      description: "",
    });
  };
  return (
    <>
      <h4 className="mb-4">Screen | Type: Question</h4>
      <div className="form-group mb-4">
        <label forhtml="question-create" className="control-label">
          Question
        </label>
        <input
          type="text"
          name="question"
          onChange={question}
          id="question-create"
          value={screenData.question}
          className="form-control"
        />
      </div>
      <div className="form-group mb-4">
        <label forhtml="description-question-create">Description</label>
        <textarea
          className="form-control"
          id="description-question-create"
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
