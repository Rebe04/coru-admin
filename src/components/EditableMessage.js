import React, { useState } from "react";

const EditableMessage = ({ screen, saveScreen, data, setData, index }) => {
  const [message, setMessage] = useState(screen.data.message);

  const handleSubmit = (e) => {
    e.preventDefault();
    screen.data.message = message;

    const newData = data.map((screenState, key) =>
      key === index ? screen : screenState
    );
    setData(newData);
    saveScreen();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column justify-content-end"
    >
      <label htmlFor="message-message">Message</label>
      <input
        className="form-control mb-2"
        type="text"
        name="message"
        id="message-message"
        defaultValue={screen.data.message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        type="submit"
        value="save"
        className="btn btn-success align-self-end"
      />
    </form>
  );
};

export default EditableMessage;
