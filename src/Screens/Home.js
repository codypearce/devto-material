import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { View, StyleSheet, ScrollView } from "react-native";

import { withRouter } from "react-router";

import { Drawer, Fab } from "material-bread";
import Appbar from "../Components/Appbar/Appbar";
import RightSheet from "../Components/RightSheet/RightSheet";
import Search from "../Components/Search";
import DrawerContent from "../Components/Drawer/DrawerContent";
import PostList from "../Components/PostList/PostList";
import ThirdColumn from "../Components/ThirdColumn/ThirdColumn";

import {
  TabletOrMobile,
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

function Home({ location }) {
  const handleIsMobile = matches => setisOpen(!matches);

  const isMobile = isWeb
    ? useMediaQuery({ maxWidth: mobileBreakpoint }, undefined, handleIsMobile)
    : isMobileNative;

  const isMobileOrMobileWeb = isMobile || (isWeb && isMobile);

  const initialState = {
    value: "",
    query: "",
    posts: [],
    isLoading: false,
    hasError: false
  };

  const [isOpen, setisOpen] = useState(isMobileOrMobileWeb ? false : true);
  const [rightSheet, setRightSheet] = useState(false);
  const [posts, setPosts] = useState(initialState.posts);
  const [isLoading, setIsLoading] = useState(initialState.isLoading);
  const [hasError, setHasError] = useState(initialState.hasError);

  const fetchPosts = async () => {
    setIsLoading(true);

    try {
      const queries = location.search ? location.search : "/";

      const result = await fetch(`https://dev.to/api/articles${queries}`);
      const data = await result.json();
      setPosts(data);
      setHasError(false);
      setTimeout(() => {
        setIsLoading(false);
      }, 600);
    } catch (e) {
      setIsLoading(false);
      setHasError(true);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [location]);

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
            <PostList posts={posts} hasError={hasError} isLoading={isLoading} />
            <LaptopOrDesktop>
              <ThirdColumn />
            </LaptopOrDesktop>
          </View>
        </ScrollView>
        <RightSheet visible={!!rightSheet} toggle={setRightSheet} />
        <TabletOrMobile>
          <Fab containerStyle={[styles.fab]} />
        </TabletOrMobile>
      </View>
    </Drawer>
  );
}

Home.propTypes = {
  location: PropTypes.object
};

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
    height: "100%",
    paddingBottom: isIphoneX() ? 80 + getBottomSpace() : 34
  },
  body: {
    width: "100%",
    backgroundColor: theme.bodyBackground,

    minHeight: screenHeight - appbarHeight,
    position: "relative",
    paddingBottom: 100
  },
  content: {
    flexDirection: "row"
  },
  fab: {
    position: isWeb ? "fixed" : "absolute",
    right: 24,
    bottom: isIphoneX() ? 80 + getBottomSpace() : 24
  }
});

export default withRouter(Home);
