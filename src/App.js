import React, { useState } from "react";
import "./App.css";

const App = () => {
  //Function to handle background color change
  const handleColorChange = (color) => {
    document.body.style.backgroundColor = color;
    setColorListVisible(false);
  };

  const [colorListVisible, setColorListVisible] = useState(false);

  // Function to toggle the visibility of the color list
  const toggleColorList = () => {
    setColorListVisible(!colorListVisible);
  };

  const colorStyles = {
    red: { backgroundColor: "red" },
    green: { backgroundColor: "green" },
    blue: { backgroundColor: "blue" },
    yellow: { backgroundColor: "yellow" },
    orange: { backgroundColor: "orange" },
    purple: { backgroundColor: "purple" },
    pink: { backgroundColor: "pink" },
    teal: { backgroundColor: "teal" },
    beige: { backgroundColor: "beige" },
    orchid: { backgroundColor: "orchid" },
  };

  return (
    <div class="color-picker-container">
      <h1 class="title">Color Picker</h1>
      <div class="button-container">
        <button id="pick-color" class="pick-button" onClick={toggleColorList}>
          Pick a color
        </button>
        <div
          className={`color-list ${colorListVisible ? "visible" : "hidden"}`}
        >
          <div
            className="color-box"
            style={colorStyles.red}
            onClick={() => handleColorChange("red")}
          ></div>
          <div
            className="color-box"
            style={colorStyles.green}
            onClick={() => handleColorChange("green")}
          ></div>
          <div
            className="color-box"
            style={colorStyles.blue}
            onClick={() => handleColorChange("blue")}
          ></div>
          <div
            className="color-box"
            style={colorStyles.yellow}
            onClick={() => handleColorChange("yellow")}
          ></div>
          <div
            className="color-box"
            style={colorStyles.orange}
            onClick={() => handleColorChange("orange")}
          ></div>
          <div
            className="color-box"
            style={colorStyles.purple}
            onClick={() => handleColorChange("purple")}
          ></div>
          <div
            className="color-box"
            style={colorStyles.pink}
            onClick={() => handleColorChange("pink")}
          ></div>
          <div
            className="color-box"
            style={colorStyles.teal}
            onClick={() => handleColorChange("teal")}
          ></div>
          <div
            className="color-box"
            style={colorStyles.beige}
            onClick={() => handleColorChange("beige")}
          ></div>
          <div
            className="color-box"
            style={colorStyles.orchid}
            onClick={() => handleColorChange("orchid")}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default App;
