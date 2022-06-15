import { useState } from "react";

function SessionMakerItemMenu(props) {
  const [show, setShow] = useState(false);

  return (
    <div
      onClick={() => setShow(!show)}
      on
      style={{ position: "relative", right: 2, cursor: "pointer", zIndex: 2 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="white"
        class="bi bi-three-dots-vertical"
        viewBox="0 0 16 16"
      >
        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
      </svg>
      <div
        style={{
          display: show ? "block" : "none",
          position: "absolute",
          backgroundColor: "darkBlue",
          borderRadius: 8,
          padding: 8,
        }}
      >
        <p onClick={props.add}>Add</p>
        <p onClick={props.remove}>Remove</p>
      </div>
    </div>
  );
}

export default SessionMakerItemMenu;
