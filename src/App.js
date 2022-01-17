import React, { useEffect } from "react";
import { getData } from "./helpers/getData";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Gallery Builder</h1>
      <form>
        <span>Title:</span>
        <input type="text"/>
        <span>Description:</span>
        <input type="text"/>
      </form>
      <button className="">New</button>
      <div className="widget">
        <div className="itemContainer">
          <div className="textContainer">
            <h2>Title</h2>
            <h3>Description</h3>
          </div>
          <div className="imgContainer">
            <img src="https://loremflickr.com/400/225/code" />
          </div>
        </div>
        <button className="delete">Delete</button>
      </div>
      <div className="widget">
        <div className="itemContainer">
          <div className="textContainer">
          <h2>Title</h2>
            <h3>Description</h3>
          </div>
          <div className="imgContainer">
            <img src="https://loremflickr.com/400/225/code" />
          </div>
        </div>
        <button className="delete">Delete</button>
      </div>
    </div>
  );
}
