import React from "react";
import PropTypes from "prop-types";

import { StyleSheet } from "react-native";
import { ProgressCircle } from "material-bread";

export default function Loader({ isLoading }) {
  return isLoading ? (
    <ProgressCircle style={styles.fullHeight} color={"#03A9F4"} />
  ) : null;
}

const styles = StyleSheet.create({
  fullHeight: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    paddingTop: 60
  }
});

Loader.propTypes = {
  isLoading: PropTypes.bool
};
