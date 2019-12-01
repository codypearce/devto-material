import React, { useState } from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import { Drawer, Fab } from "material-bread";
import Appbar from "../Components/Appbar";
import { trueHundredHeight } from "../Styles/dimensions";
import theme from "../Styles/theme";
import { TabletOrMobile } from "../Styles/responsive";

export default function Home() {
  const [isOpen, setisOpen] = useState(true);
  const isWeb = Platform.OS == "web";

  return (
    <Drawer
      open={isWeb ? true : isOpen}
      type={isWeb ? "permanent" : "modal"}
      onClose={() => setisOpen(false)}
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
        <TabletOrMobile>
          <Fab style={styles.fab} />
        </TabletOrMobile>
      </View>
    </Drawer>
  );
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
    backgroundColor: theme.bodyBackground,
    padding: 34,
    minHeight: trueHundredHeight
  },
  fab: {
    position: "absolute"
  }
});
