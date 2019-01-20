import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import { card } from "../../../e2e/test-ids";

class Item extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { children, index } = this.props;
    return (
      <TouchableOpacity
        style={{
          borderColor: "black",
          borderStyle: "solid",
          borderWidth: 2
        }}
        testID={card.item.container(index)}
      >
        <Text style={{ color: "blue", margin: 20 }} testID={card.item.linkText}>
          {children}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Item;
