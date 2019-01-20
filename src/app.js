/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import Card from "./components/Card";
import { landingPage } from "../e2e/test-ids";

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
        testID={landingPage.container}
        style={{
          flex: 1,
          paddingTop: 50,
          alignItems: "center"
        }}
      >
        <Text
          style={{ fontSize: 25, marginBottom: 30 }}
          testID={landingPage.title}
        >
          Detox Boilerplate App
        </Text>
        <Card greeting="Hello!" />
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
