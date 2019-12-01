import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

export default function Box({
  children,
  type,
  alignItems,
  justifyContent,
  marginTop,
  marginBottom,
  padding,
  flexWrap,
  style
}) {
  return (
    <View
      style={[
        {
          flexDirection: type,
          alignItems: alignItems,
          justifyContent: justifyContent,
          marginTop: marginTop,
          marginBottom: marginBottom,
          padding,
          flexWrap
        },
        style
      ]}
    >
      {children}
    </View>
  );
}

Box.propTypes = {
  children: PropTypes.node,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  type: PropTypes.string,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  padding: PropTypes.number,
  flexWrap: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
