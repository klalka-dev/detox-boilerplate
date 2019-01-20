/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, Text, View } from "react-native";
import Card from "./components/Card";

import testids from "../e2e/test-ids/";

class example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: undefined
    };
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 50,
          alignItems: "center"
        }}
        testID={testids.landingPage.container}
      >
        <Text
          style={{ fontSize: 25, marginBottom: 30 }}
          testID={testids.landingPage.title}
        >
          Detox Boilerplate App
        </Text>
        <Card links={["Hello!", "Click Me!", "Leave Me Alone."]} />
      </View>
    );
  }
  onButtonPress(greeting) {
    this.setState({
      greeting: greeting
    });
  }
}

AppRegistry.registerComponent("example", () => example);
