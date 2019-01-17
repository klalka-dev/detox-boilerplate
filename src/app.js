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
import testids from "../e2e/test-ids";

class example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: undefined
    };
  }
  render() {
    if (this.state.greeting) return this.renderAfterButton();
    return (
      <View
        testID={testids.routes.landing.name}
        style={{
          flex: 1,
          paddingTop: 20,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{ fontSize: 25, marginBottom: 30 }}
          testID={testids.routes.landing.title}
        >
          Welcome
        </Text>
        <TouchableOpacity
          testID={testids.routes.landing.helloButton}
          onPress={this.onButtonPress.bind(this, "Hello")}
        >
          <Text style={{ color: "blue", marginBottom: 20 }}>Say Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID={testids.routes.landing.worldButton}
          onPress={this.onButtonPress.bind(this, "World")}
        >
          <Text style={{ color: "blue", marginBottom: 20 }}>Say World</Text>
        </TouchableOpacity>
      </View>
    );
  }
  renderAfterButton() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 20,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ fontSize: 25 }} testID={testids.routes.landing.greeting}>
          {this.state.greeting}!!!
        </Text>
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
