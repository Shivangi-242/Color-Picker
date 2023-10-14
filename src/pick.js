import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isColorListVisible: false,
      selectedColor: null,
    };
  }

  handleButtonClick = () => {
    this.setState({ isColorListVisible: true });
  };

  handleColorClick = (color) => {
    this.setState({ selectedColor: color, isColorListVisible: false });
  };

  render() {
    const { colors } = this.props;
    const { isColorListVisible, selectedColor } = this.state;

    return (
      <div className="color-picker">
        <button onClick={this.handleButtonClick}>
          Pick a color
        </button>

        {isColorListVisible && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-square"
                style={{ backgroundColor: color }}
                onClick={() => this.handleColorClick(color)}
              ></div>
            ))}
          </div>
        )}

        {selectedColor && (
          <div className="selected-color">
            Selected Color: <span style={{ backgroundColor: selectedColor }}>{selectedColor}</span>
          </div>
        )}
      </div>
    );
  }
}

export default ColorPicker;
