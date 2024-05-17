import React, { useState } from "react";
import "./Form.css";

export default function Form({ onFormSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(inputValue);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        value={inputValue}
        name="username"
        id="username"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
