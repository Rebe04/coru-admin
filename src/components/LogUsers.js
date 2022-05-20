import React from "react";

export default function LogUsers(props) {
  const { timestamp, logInfo } = props;

  return (
    <div className="item-timeline">
      <div className="t-meta-date">
        <p className="">{`${timestamp.hour} ${timestamp.day} ${timestamp.month} ${timestamp.year}`}</p>
      </div>
      <div className="t-dot"></div>
      <div className="t-text">
        <p>{logInfo.name}</p>
        <div>{logInfo.section}</div>
        <span className="list-text">{logInfo.duration} m</span>
      </div>
    </div>
  );
}
