import React, { Component } from "react";
import { View } from "react-native";

import Item from "./Item";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { links } = this.props;
    return (
      <View
        style={{
          padding: 20,
          borderColor: "black",
          borderStyle: "solid",
          borderWidth: 2
        }}
      >
        {links.map((link, index) => (
          <Item index={index}>{link}</Item>
        ))}
      </View>
    );
  }
}

export default Card;
