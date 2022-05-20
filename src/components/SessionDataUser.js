import React from "react";
import { Link } from "react-router-dom";

export default function SessionDataUser(props) {
  const { logInfo } = props;

  return (
    <div className="col-12 col-xl-6 col-lg-12 mb-xl-5 mb-5 hovering-zoom">
      <div className="d-flex b-skills">
        <div></div>
        <div className="">
          <div className="d-flex">
            <p className="text-xs">Duration: {logInfo.duration} min</p>
          </div>
          <h4>{logInfo.name}</h4>
          <div className="d-flex justify-content-start">
            <h5>{logInfo.category} </h5>{" "}
            <p className="ml-1"> | Type: {logInfo.type}</p>
            <p className="ml-1 text-success"> | Section: {logInfo.section}</p>
          </div>
          <p style={{ fontSize: "20px" }}>
            <b>Subsection:</b> {logInfo.subsection}
          </p>
          <div className="d-flex justify-content-end">
            <p className="text-secondary font-weight-bold">
              XP Earned: {logInfo.xp} min
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
