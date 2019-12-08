import React from "react";
import { View, SafeAreaView } from "react-native";
import Routes from "./Routes";
import { BreadProvider } from "material-bread";

const theme = {
  text: {
    fontFamily: "Roboto"
  }
};

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <BreadProvider value={theme}>
          <SafeAreaView style={{ flex: 1 }}>
            <Routes />
          </SafeAreaView>
        </BreadProvider>
      </View>
    );
  }
}
