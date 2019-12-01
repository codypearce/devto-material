import React from "react";
import PropTypes from "prop-types";

import { StyleSheet, View } from "react-native";
import { Appbar, Button, Icon, Ripple } from "material-bread";
import ProfileButton from "./ProfileButton";
import Search from "../Search";
import NotificationBadge from "./NotificationBadge";

import { withRouter } from "react-router";

import { LaptopOrDesktop, NotMobile } from "../../Styles/responsive";

function Header({ history, toggleRightSheet, toggleDrawer }) {
  return (
    <Appbar
      navigation={
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ripple onPress={toggleDrawer}>
            <Icon name="menu" size={24} />
          </Ripple>
          <Button
            text={"DEV.TO.MATERIAL"}
            onPress={() => history.push("/")}
            color="#0d0961"
            type="flat"
            style={{
              marginLeft: 16
            }}
          />
        </View>
      }
      onNavigation={toggleDrawer}
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
  toggleRightSheet: PropTypes.func,
  toggleDrawer: PropTypes.func
};

const styles = StyleSheet.create({
  appbar: {
    borderBottomColor: "#f1f1f1",
    borderBottomWidth: 1
  }
});

export default withRouter(Header);
