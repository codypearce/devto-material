import React from "react";
import { View, SafeAreaView } from "react-native";
import Routes from "./Routes";
import { BreadProvider } from "material-bread";
import { isWeb } from "./Styles/device";

const theme = {
  text: {
    fontFamily: isWeb ? "Roboto, sans-serif" : "Roboto"
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
