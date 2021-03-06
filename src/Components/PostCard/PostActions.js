import React from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";

import { Badge, Icon, ToggleButton } from "material-bread";
import Box from "../Box";

export default function PostActions({ reactions, comments, isMobile }) {
  return (
    <Box
      type={"row"}
      justifyContent={isMobile ? "space-between" : "center"}
      alignItems={"center"}
      style={{
        width: isMobile ? "100%" : "auto",
        marginTop: isMobile ? 12 : 0
      }}
    >
      <Badge
        size={16}
        content={reactions}
        visible={reactions > 0}
        maxValue={999}
        right={-10}
        top={-4}
        style={{
          padding: 0,
          minHeight: reactions > 99 ? 18 : 16,
          minWidth: reactions > 99 ? 18 : 16,
          boxSizing: "border-box"
        }}
        containerStyle={styles.containerBadge}
      >
        <Icon name="mood" size={26} color={"#1abc9c"} style={styles.icon} />
      </Badge>
      <Badge
        size={16}
        content={comments}
        visible={comments > 0}
        maxValue={999}
        right={-10}
        top={-4}
        style={{
          minHeight: comments > 99 ? 18 : 16,
          minWidth: comments > 99 ? 18 : 16
        }}
        containerStyle={styles.commentsBadge}
      >
        <Icon name="comment" size={26} color={"#34495e"} style={styles.icon} />
      </Badge>

      <ToggleButton
        activeNode={<Icon name="bookmark" size={28} color={"#e74142"} />}
        inActiveNode={
          <Icon name="bookmark-border" size={28} color={"#e74142"} />
        }
        rippleColor={"rgba(231, 65, 66, .4)"}
        size={28}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  containerBadge: {
    marginRight: 4,
    padding: 5,
    minHeight: 26,
    minWidth: 26
  },
  commentsBadge: {
    marginRight: 20,
    padding: 4,
    minHeight: 26,
    minWidth: 26
  },
  icon: {
    minHeight: 26,
    minWidth: 26
  }
});

PostActions.propTypes = {
  reactions: PropTypes.number,
  comments: PropTypes.number,
  isMobile: PropTypes.bool
};
