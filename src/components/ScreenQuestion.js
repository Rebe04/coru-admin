import React from "react";

const ScreenQuestion = ({ screen, editScreen, index, deleteScreen }) => {
  return (
    <div className="d-flex justify-content-between">
      <div>
        <h5>{screen.data.question}</h5>
        <p>{screen.data.description}</p>
        <div>Screen type: {screen.type}</div>
      </div>
      <div>
        <button
          className="btn btn-warning btn-sm ml-2"
          onClick={() => editScreen(index)}
        >
          <i className="fas fa-edit"></i>
        </button>
        <button
          onClick={() => deleteScreen(index)}
          className="btn btn-danger btn-sm ml-2"
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default ScreenQuestion;
