import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

export default function DrawerSection({ children }) {
  return <View style={{ marginBottom: 24 }}>{children}</View>;
}

DrawerSection.propTypes = {
  children: PropTypes.node
};
