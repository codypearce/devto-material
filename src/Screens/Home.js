import React, { useState } from "react";
import { View, Text, Platform, StyleSheet, ScrollView } from "react-native";
import { Drawer, Fab } from "material-bread";
import Appbar from "../Components/Appbar";
import { trueHundredHeight, screenHeight } from "../Styles/dimensions";
import theme from "../Styles/theme";
import { TabletOrMobile } from "../Styles/responsive";
import { getBottomSpace } from "react-native-iphone-x-helper";

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
        <ScrollView>
          <View style={{ flexDirection: "row", padding: 34 }}></View>
        </ScrollView>
        <TabletOrMobile>
          <Fab containerStyle={styles.fab} />
        </TabletOrMobile>
      </View>
    </Drawer>
  );
}

const appbarHeight = 56;

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

    minHeight: screenHeight - appbarHeight
  },
  fab: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: 24,
    paddingBottom: 24,
    marginBottom: getBottomSpace()
  }
});
