import React from "react";
import PropTypes from "prop-types";

import { Text } from "react-native";

export default function PostError({ hasError }) {
  return hasError ? <Text>Sorry there was error fetching</Text> : null;
}

PostError.propTypes = {
  hasError: PropTypes.bool
};
