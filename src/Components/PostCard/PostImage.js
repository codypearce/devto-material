import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-native";
import { isMobileNative, mobileBreakpoint } from "../../Styles/responsive";

import { isWeb } from "../../Styles/device";
import { useMediaQuery } from "react-responsive";

export default function PostImage({ show, image }) {
  if (!show) return null;

  const isMobile = isWeb
    ? useMediaQuery({ maxWidth: mobileBreakpoint })
    : isMobileNative;
  return (
    <Image
      source={{ uri: image }}
      style={{
        height: isMobile ? 200 : 300,
        width: "100%",
        borderRadius: 8,
        marginBottom: 12
      }}
    />
  );
}

PostImage.propTypes = {
  show: PropTypes.bool,
  image: PropTypes.string
};
