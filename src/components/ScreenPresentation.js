import React from "react";

const ScreenPresentation = ({ screen, editScreen, index, deleteScreen }) => {
  return (
    <div className="d-flex justify-content-between">
      <div>
        <h5>{screen.data.title}</h5>
        <p>{screen.data.description}</p>
        <div>Screen type: {screen.type}</div>
      </div>
      <div>
        <button
          onClick={() => editScreen(index)}
          className="btn btn-warning btn-sm ml-2"
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

export default ScreenPresentation;
