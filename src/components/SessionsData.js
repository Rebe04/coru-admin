import React from "react";
import { Link } from "react-router-dom";

export default function SessionsData(props) {
  const { sessionData } = props;

  const typeSession = (question, index) => {
    switch (question.type) {
      case "presentation":
        return (
          <div
            className="col-12 col-xl-6 col-lg-12 mb-xl-5 mb-5 hovering-zoom"
            key={index}
          >
            <div className="d-flex w-auto  b-skills">
              <div className="w-100">
                <h4>
                  <b>Title:</b> {question.data.title}
                </h4>
                <p className="text-info">Description:</p>
                {question.data.description}
                <div className="d-flex justify-content-end pt-3">
                  <p>
                    <span className="text-success">Type: </span>
                    {question.type}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case "question":
        return (
          <div
            className="col-12 col-xl-6 col-lg-12 mb-xl-5 mb-5 hovering-zoom"
            key={index}
          >
            <div className="d-flex w-auto b-skills">
              <div className="w-100">
                <h4>
                  <b>Question: </b>
                  {question.data.question}
                </h4>
                <p className="text-info">Description:</p>
                {question.data.description}
                <div className="d-flex justify-content-end pt-3">
                  <p>
                    <span className="text-success">Type: </span>
                    {question.type}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case "range":
        return (
          <div
            className="col-12 col-xl-6 col-lg-12 mb-xl-5 mb-5 hovering-zoom"
            key={index}
          >
            <div className="d-flex w-auto b-skills">
              <div className="w-100">
                <div className="d-flex">
                  <div className="col-md-11">
                    <div className="custom-progress top-right w-100 progress-up">
                      <h4 className="skill-name">
                        Question: {question.data.question}
                      </h4>
                      <div className="d-flex mt-4 w-100 justify-content-between">
                        <div>
                          <span>{question.data.min}</span>
                        </div>
                        <div className="w-100 mx-3">
                          <input
                            type="range"
                            min="0"
                            max="100"
                            className="custom-range progress-range-counter"
                            value="50"
                          />
                        </div>
                        <div>
                          <span>{question.data.max}</span>
                        </div>
                      </div>
                      <div className="range-count">
                        <div className="d-flex justify-content-end pt-3">
                          <p>
                            <span className="text-success">Type: </span>
                            {question.type}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "message":
        return (
          <div
            className="col-12 col-xl-6 col-lg-12 mb-xl-5 mb-5 hovering-zoom"
            key={index}
          >
            <div className="d-flex h-100 position-relative b-skills">
              <div className="w-100">
                <h4>
                  <b>Message: </b>
                  {question.data.message}
                </h4>
                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "30px",
                  }}
                >
                  <div className="d-flex w-100 justify-content-end pt-3">
                    <p>
                      <span className="text-success">Type: </span>
                      {question.type}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "photo":
        return (
          <div
            className="col-12 col-xl-6 col-lg-12 mb-xl-5 mb-5 hovering-zoom"
            key={index}
          >
            <div className="d-flex w-auto  b-skills">
              <div></div>
              <div className="w-100">
                <h4>
                  <b>Title:</b> {question.data.title}
                </h4>
                <p className="text-info">Description:</p>
                {question.data.description}
                <div className="d-flex justify-content-end pt-3">
                  <p>
                    <span className="text-success">Type: </span>
                    {question.type}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case "calification":
        return (
          <div
            className="col-12 col-xl-6 col-lg-12 mb-xl-5 mb-5 hovering-zoom"
            key={index}
          >
            <div className="d-flex h-100 position-relative b-skills">
              <div className="w-100">
                <h4>
                  <b>Question: </b>
                  {question.data.question}
                </h4>
                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "30px",
                  }}
                >
                  <div className="d-flex w-100 justify-content-end pt-3">
                    <p>
                      <span className="text-success">Type: </span>
                      {question.type}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "feedback":
        return (
          <div
            className="col-12 col-xl-6 col-lg-12 mb-xl-5 mb-5 hovering-zoom"
            key={index}
          >
            <div className="d-flex h-100 position-relative b-skills">
              <div className="w-100">
                <h4>
                  <b>Description: </b>
                  {question.data.description}
                </h4>
                <div class="list-group mt-3">
                  {question.data.posibilities.map((posibility, index) => (
                    <div class="list-group-item bg-secondary">{posibility}</div>
                  ))}
                </div>
                <div className="d-flex w-100 justify-content-end pt-3">
                  <p>
                    <span className="text-success">Type: </span>
                    {question.type}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        break;
    }
  };

  return (
    <div className="row">
      {sessionData.map((question, index) => typeSession(question, index))}
    </div>
  );
}
