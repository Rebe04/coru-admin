import React, { useState } from "react";

const EditableQuestion = ({ screen, saveScreen, data, setData, index }) => {
  const [question, setQuestion] = useState(screen.data.question);
  const [description, setDescription] = useState(screen.data.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    screen.data.question = question;
    screen.data.description = description;

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
      <label htmlFor="question-question">Question</label>
      <input
        className="form-control mb-3"
        type="text"
        name="title"
        id="question-question"
        defaultValue={screen.data.question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <label htmlFor="question-description">Description</label>
      <input
        className="form-control mb-4"
        type="text"
        name="description"
        id="question-description"
        defaultValue={screen.data.description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="submit"
        value="save"
        className="btn btn-success align-self-end"
      />
    </form>
  );
};

export default EditableQuestion;
