import React, { useState } from "react";

const EditablePresentation = ({ screen, saveScreen, data, setData, index }) => {
  const [title, setTitle] = useState(screen.data.title);
  const [description, setDescription] = useState(screen.data.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    screen.data.title = title;
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
      <label htmlFor="title-presentation">Title</label>
      <input
        className="form-control mb-3"
        type="text"
        name="title"
        id="title-presentation"
        defaultValue={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description-presentation">Description</label>
      <input
        className="form-control mb-4"
        type="text"
        name="description"
        id="description-presentation"
        defaultValue={description}
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

export default EditablePresentation;
