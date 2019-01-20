import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import landingPage from "../../../e2e/test-ids/landing-page";

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { greeting } = this.props;
    return (
      <View
        style={{
          padding: 20,
          borderColor: "black",
          borderStyle: "solid",
          borderWidth: 2
        }}
        testID={landingPage.card}
      >
        <TouchableOpacity
          style={{
            borderColor: "black",
            borderStyle: "solid",
            borderWidth: 2
          }}
        >
          <Text
            style={{ color: "blue", margin: 20 }}
            testID={landingPage.linkOne}
          >
            {greeting}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderColor: "black",
            borderStyle: "solid",
            borderWidth: 2
          }}
        >
          <Text
            style={{ color: "blue", margin: 20 }}
            testID={landingPage.linkTwo}
          >
            {greeting}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Card;
