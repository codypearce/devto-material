import React from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";

import { Badge, IconButton } from "material-bread";
import { isMobileNative } from "../../Styles/responsive";

export default function NotificationBadge({ hasNotifications }) {
  return (
    <Badge
      style={styles.notificationBadge}
      containerStyle={styles.notificationContainer}
      size={8}
      hasNotifications={hasNotifications}
    >
      <IconButton
        name="notifications"
        size={24}
        color={"#eee"}
        rippleColor={"rgba(0,0,0,.2)"}
      />
    </Badge>
  );
}

NotificationBadge.propTypes = {
  hasNotifications: PropTypes.bool
};

const styles = StyleSheet.create({
  notificationBadge: {
    position: "absolute",
    top: 5,
    right: 6
  },
  notificationContainer: {
    alignSelf: isMobileNative ? "stretch" : "center",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
    marginRight: 8,
    minHeight: 40
  }
});
