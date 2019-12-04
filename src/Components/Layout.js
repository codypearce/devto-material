import React, { useState } from "react";
import PropTypes from "prop-types";

import { View, StyleSheet, ScrollView } from "react-native";

import { Drawer, Fab } from "material-bread";
import Appbar from "./Appbar/Appbar";
import RightSheet from "./RightSheet/RightSheet";
import Search from "./Search";
import DrawerContent from "./Drawer/DrawerContent";
import ThirdColumn from "./ThirdColumn/ThirdColumn";

import {
  Mobile,
  isMobileNative,
  mobileBreakpoint,
  LaptopOrDesktop
} from "../Styles/responsive";
import { trueHundredHeight, screenHeight } from "../Styles/dimensions";
import { isWeb } from "../Styles/device";
import { useMediaQuery } from "react-responsive";

import { getBottomSpace, isIphoneX } from "react-native-iphone-x-helper";
import theme from "../Styles/theme";

export default function Layout({ children }) {
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
      drawerStyle={[styles.drawer]}
      scrimStyles={{ position: "absolute", height: "100%" }}
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
          <View style={[{ padding: isMobile ? 8 : 28 }, styles.content]}>
            {children}
            <LaptopOrDesktop>
              <ThirdColumn />
            </LaptopOrDesktop>
          </View>
        </ScrollView>
        <RightSheet visible={!!rightSheet} toggle={setRightSheet} />
        <Mobile>
          <Fab containerStyle={[styles.fab]} />
        </Mobile>
      </View>
    </Drawer>
  );
}

Layout.propTypes = {
  children: PropTypes.node
};

const appbarHeight = 56;

const styles = StyleSheet.create({
  pageContainer: {
    height: "auto",
    minHeight: trueHundredHeight,
    backgroundColor: theme.bodyBackground
  },
  drawer: {
    borderRightWidth: 0,
    minHeight: screenHeight - appbarHeight,
    height: "100%",
    paddingBottom: isIphoneX() ? 80 + getBottomSpace() : 34
  },
  body: {
    width: "100%",
    backgroundColor: theme.bodyBackground,

    minHeight: screenHeight - appbarHeight,
    position: "relative",
    paddingBottom: 140,
    maxWidth: 1440
  },
  content: {
    flexDirection: "row"
  },
  fab: {
    position: isWeb ? "fixed" : "absolute",
    right: 20,
    bottom: isIphoneX() ? 80 + getBottomSpace() : 20
  }
});
