import React, { useState } from "react";
import "./App.css";

import Form from "./Form";
import Pokemon from "./Pokemon";

function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");

  const handleFormSubmit = (newUsername) => {
    setUsername(newUsername);
  };
  return (
    <>
      <h1>Trying Vite</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <h1>Hello {username} </h1>
      <p>Let's See Which Pokemon You Are:</p>
      <Form onFormSubmit={handleFormSubmit} />
      {username ? <Pokemon /> : <p>Enter Your Name</p>}
    </>
  );
}

export default App;
