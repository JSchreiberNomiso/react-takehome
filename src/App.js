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
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
          </div>
          <div className="imgContainer">
            <img src="https://loremflickr.com/225/400/code" />
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
