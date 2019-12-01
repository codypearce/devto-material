import React from "react";
import PropTypes from "prop-types";

import { Image, StyleSheet } from "react-native";
import {
  Appbar,
  Button,
  Avatar,
  IconButton,
  Badge,
  Icon,
  BodyText
} from "material-bread";
import { withRouter } from "react-router";
import { useMediaQuery } from "react-responsive";
import {
  mobileBreakpoint,
  isMobileNative,
  LaptopOrDesktop
} from "../Styles/responsive";
import { isWeb } from "../Styles/device";

function Header({ history }) {
  const isMobile = isWeb
    ? useMediaQuery({ maxWidth: mobileBreakpoint })
    : isMobileNative;

  return (
    <Appbar
      title={
        <BodyText
          text={isMobile ? "DEV.M" : "Dev.to.Material"}
          color={"#0d0863"}
        />
      }
      onTitle={() => history.push("/")}
      color={"white"}
      elevation={0}
      style={[{ boxShadow: "none" }, styles.appbar]}
      actionItems={[
        <LaptopOrDesktop key={1}>
          <Button
            text={"Write a post"}
            onPress={this.createPost}
            type="outlined"
            icon={<Icon name={"send"} />}
            radius={20}
            borderSize={2}
            style={{ marginRight: 8 }}
          />
        </LaptopOrDesktop>,
        <Badge
          style={styles.notificationBadge}
          containerStyle={styles.notificationContainer}
          size={8}
          key={2}
        >
          <IconButton
            name="notifications"
            size={24}
            color={"#eee"}
            rippleColor={"rgba(0,0,0,.2)"}
          />
        </Badge>,

        <Avatar
          type="image"
          image={
            <Image
              source={{
                uri:
                  "https://avatars1.githubusercontent.com/u/12564956?s=460&v=4"
              }}
            />
          }
          size={32}
          key={3}
          style={{ marginRight: 4 }}
        />
      ]}
    />
  );
}

Header.propTypes = {
  history: PropTypes.object
};

const styles = StyleSheet.create({
  appbar: {
    borderBottomColor: "#f1f1f1",
    borderBottomWidth: 1
  },
  notificationBadge: {
    position: "absolute",
    top: 0,
    right: 6
  },
  notificationContainer: {
    alignSelf: isMobileNative ? "stretch" : "center",
    marginLeft: 8,
    marginRight: 8
  }
});

export default withRouter(Header);
