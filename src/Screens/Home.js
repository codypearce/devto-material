import React from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import { Link } from "../Router";
import { Drawer } from "material-bread";
import Appbar from "../Components/Appbar";
import { trueHundredHeight } from "../Styles/dimensions";
import theme from "../Styles/theme";

export default class Home extends React.Component {
  state = {
    isOpen: false
  };

  setisOpen = isOpen => {
    this.setState({ isOpen });
  };
  render() {
    const { isOpen } = this.state;
    const isWeb = Platform.OS == "web";

    return (
      <Drawer
        open={isWeb ? true : isOpen}
        type={isWeb ? "permanent" : "modal"}
        onClose={() => this.setisOpen(false)}
        drawerContent={
          <View>
            <Text>Drawer Content</Text>
          </View>
        }
        style={styles.pageContainer}
        drawerStyle={styles.drawer}
        appbar={<Appbar />}
      >
        <View style={styles.body}>
          <View style={{ flexDirection: "row" }}></View>
        </View>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    height: "auto",
    minHeight: trueHundredHeight,
    backgroundColor: theme.background
  },
  drawer: {
    borderRightWidth: 0,
    height: "100%"
  },
  body: {
    width: "100%",
    paddingTop: 34,
    backgroundColor: theme.bodyBackground,
    padding: 34,
    minHeight: trueHundredHeight
  }
});
