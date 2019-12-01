import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Drawer, Fab } from "material-bread";
import Appbar from "../Components/Appbar/Appbar";
import RightSheet from "../Components/RightSheet/RightSheet";
import Search from "../Components/Search";

import {
  TabletOrMobile,
  Mobile,
  isMobileNative,
  mobileBreakpoint
} from "../Styles/responsive";
import { trueHundredHeight, screenHeight } from "../Styles/dimensions";
import { isWeb } from "../Styles/device";
import { useMediaQuery } from "react-responsive";

import { getBottomSpace } from "react-native-iphone-x-helper";
import theme from "../Styles/theme";

export default function Home() {
  const [isOpen, setisOpen] = useState(true);
  const [rightSheet, setRightSheet] = useState(false);
  const isMobile = isWeb
    ? useMediaQuery({ maxWidth: mobileBreakpoint })
    : isMobileNative;

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
      appbar={<Appbar toggleRightSheet={setRightSheet} />}
    >
      <View style={styles.body}>
        <ScrollView>
          <Mobile>
            <Search />
          </Mobile>
          <View style={[{ padding: isMobile ? 8 : 34 }, styles.content]}></View>
        </ScrollView>
        <RightSheet visible={!!rightSheet} toggle={setRightSheet} />
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
  content: {
    flexDirection: "row"
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
