import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Post from "./components/post";
import PostForm from "./components/postForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <PostForm />
      <hr />
      <Post />
    </div>
  );
}

export default App;
