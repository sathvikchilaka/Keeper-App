import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "./Input.css";

export default function Input(props) {
  const { current, changeFunc, addFunc } = props;
  return (
    <div className="input-container">
      <input
        name="title"
        type="text"
        placeholder="Add New Note"
        className="title-input"
        autoComplete="off"
        value={current.title}
        onChange={(event) => changeFunc(event.target.name, event.target.value)}
      />
      <textarea
        name="content"
        placeholder="Content"
        rows="10"
        className="content-input"
        value={current.content}
        onChange={(event) => changeFunc(event.target.name, event.target.value)}
      />
      <AddIcon className="buttonWrap-add" onClick={addFunc} />
    </div>
  );
}
