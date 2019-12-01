import React from "react";
import PropTypes from "prop-types";

import { StyleSheet } from "react-native";
import { Appbar, Button, Icon, BodyText } from "material-bread";
import ProfileButton from "./ProfileButton";
import Search from "../Search";
import NotificationBadge from "./NotificationBadge";

import { withRouter } from "react-router";
import { useMediaQuery } from "react-responsive";
import {
  mobileBreakpoint,
  isMobileNative,
  LaptopOrDesktop,
  NotMobile
} from "../../Styles/responsive";
import { isWeb } from "../../Styles/device";

function Header({ history, toggleRightSheet }) {
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
        <NotMobile key={0}>
          <Search />
        </NotMobile>,
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
        <NotificationBadge hasNotifications={true} key={2} />,
        <ProfileButton key={3} toggle={toggleRightSheet} />
      ]}
    />
  );
}

Header.propTypes = {
  history: PropTypes.object,
  toggleRightSheet: PropTypes.func
};

const styles = StyleSheet.create({
  appbar: {
    borderBottomColor: "#f1f1f1",
    borderBottomWidth: 1
  }
});

export default withRouter(Header);
