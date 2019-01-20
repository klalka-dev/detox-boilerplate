import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonColor: "white"
    };
  }
  render() {
    const { buttonColor } = this.state;
    return (
      <TouchableOpacity
        style={{
          borderColor: "black",
          borderStyle: "solid",
          borderWidth: 2,
          backgroundColor: buttonColor,
          width: 20,
          height: 20
        }}
        onPress={this.updateColor.bind(this, buttonColor)}
        testID={`${buttonColor} Button`}
      />
    );
  }

  updateColor(color) {
    switch (color) {
      case "white": {
        this.setState({
          buttonColor: "red"
        });
        break;
      }
      case "red": {
        this.setState({
          buttonColor: "green"
        });
        break;
      }
      case "green": {
        this.setState({
          buttonColor: "blue"
        });
        break;
      }
      case "blue": {
        this.setState({
          buttonColor: "red"
        });
        break;
      }
      default: {
        this.setState({
          buttonColor: "white"
        });
        break;
      }
    }
  }
}

export default Button;
