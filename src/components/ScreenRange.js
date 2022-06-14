import React from "react";

const ScreenRange = ({ screen, editScreen, index, deleteScreen }) => {
  return (
    <div className="d-flex justify-content-between">
      <div>
        <h5>{screen.data.question}</h5>
        <div className="d-flex justify-content-around pt-3 mx-auto">
          <div className="w-25 mr-4">
            <p>{screen.data.min}</p>
          </div>
          <div className="w-50 mr-4">
            <input type="range" />
          </div>
          <div className="w-25">
            <p>{screen.data.max}</p>
          </div>
        </div>
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

export default ScreenRange;
