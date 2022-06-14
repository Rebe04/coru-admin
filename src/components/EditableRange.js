import React, { useState } from "react";

const EditableRange = ({ screen, saveScreen, data, setData, index }) => {
  const [question, setQuestion] = useState(screen.data.question);
  const [min, setMin] = useState(screen.data.min);
  const [max, setMax] = useState(screen.data.max);

  const handleSubmit = (e) => {
    e.preventDefault();
    screen.data.question = question;
    screen.data.min = min;
    screen.data.max = max;

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
      <label htmlFor="title-range">Title</label>
      <input
        className="form-control mb-2"
        type="text"
        name="title"
        id="title-range"
        defaultValue={screen.data.question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <div className="d-flex justify-content-between pt-3 mb-3">
        <div>
          <label htmlFor="min-range">Min</label>

          <input
            className="form-control"
            type="text"
            name="min"
            id="min-range"
            defaultValue={screen.data.min}
            onChange={(e) => setMin(e.target.value)}
          />
        </div>
        <div className="flex-fill px-5">
          <input className="w-100" type="range" />
        </div>
        <div>
          <label htmlFor="max-range">Max</label>

          <input
            className="form-control"
            type="text"
            name="max"
            id="max-range"
            defaultValue={screen.data.max}
            onChange={(e) => setMax(e.target.value)}
          />
        </div>
      </div>
      <input
        type="submit"
        value="save"
        className="btn btn-success align-self-end"
      />
    </form>
  );
};

export default EditableRange;
