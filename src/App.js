import React from "react";
import { View, SafeAreaView } from "react-native";
import Routes from "./Routes";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <SafeAreaView>
          <Routes />
        </SafeAreaView>
      </View>
    );
  }
}
