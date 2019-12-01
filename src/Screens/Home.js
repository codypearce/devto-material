import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Drawer, Fab } from "material-bread";
import Appbar from "../Components/Appbar/Appbar";
import RightSheet from "../Components/RightSheet/RightSheet";
import Search from "../Components/Search";
import DrawerContent from "../Components/Drawer/DrawerContent";

import {
  TabletOrMobile,
  Mobile,
  isMobileNative,
  mobileBreakpoint
} from "../Styles/responsive";
import { trueHundredHeight, screenHeight } from "../Styles/dimensions";
import { isWeb } from "../Styles/device";
import { useMediaQuery } from "react-responsive";

import { getBottomSpace, isIphoneX } from "react-native-iphone-x-helper";
import theme from "../Styles/theme";

export default function Home() {
  const handleIsMobile = matches => setisOpen(!matches);

  const isMobile = isWeb
    ? useMediaQuery({ maxWidth: mobileBreakpoint }, undefined, handleIsMobile)
    : isMobileNative;

  const isMobileOrMobileWeb = isMobile || (isWeb && isMobile);

  const [isOpen, setisOpen] = useState(isMobileOrMobileWeb ? false : true);

  const [rightSheet, setRightSheet] = useState(false);

  return (
    <Drawer
      open={isOpen}
      type={isMobileOrMobileWeb ? "modal" : "permanent"}
      onClose={() => setisOpen(false)}
      drawerContent={<DrawerContent />}
      style={styles.pageContainer}
      drawerStyle={styles.drawer}
      width={isMobile ? 280 : 265}
      appbar={
        <Appbar
          toggleRightSheet={setRightSheet}
          toggleDrawer={() => setisOpen(!isOpen)}
        />
      }
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
          <Fab
            containerStyle={[
              { marginRight: isMobileOrMobileWeb ? 24 : 48 },
              styles.fab
            ]}
          />
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
    minHeight: screenHeight - appbarHeight,
    paddingBottom: isIphoneX() ? 80 + getBottomSpace() : 34
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

    marginBottom: isIphoneX() ? 24 + getBottomSpace() : 24
  }
});
