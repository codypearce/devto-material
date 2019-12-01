import React, { useState } from "react";

import { StyleSheet } from "react-native";

import { Searchfield, shadow } from "material-bread";
import { isWeb } from "../Styles/device";
import { isMobileNative, mobileBreakpoint } from "../Styles/responsive";
import { useMediaQuery } from "react-responsive";

export default function Search() {
  const isMobile = isWeb
    ? useMediaQuery({ maxWidth: mobileBreakpoint })
    : isMobileNative;

  const initialState = {
    search: ""
  };

  const [search, setSearch] = useState(initialState.search);

  const platformStyles = isWeb
    ? {
        outline: "none"
      }
    : {};

  const shadows = isMobile ? shadow(2) : shadow(0);

  return (
    <Searchfield
      color={isMobile ? "white" : "#f2f6ff"}
      placeholderTextColor={"#989ba3"}
      key={0}
      iconProps={{
        color: "#989ba3",
        style: {
          margin: 10
        }
      }}
      style={[
        {
          marginHorizontal: isMobile ? 8 : 28,
          marginTop: isMobile ? 8 : 0,
          ...shadows
        },
        styles.search
      ]}
      textStyle={[
        platformStyles,
        {
          color: "#989ba3"
        }
      ]}
      value={search}
      onChangeText={search => setSearch(search)}
      onCloseIcon={() => setSearch("")}
    />
  );
}

const styles = StyleSheet.create({
  search: {
    flexGrow: 1,
    flexShrink: 0,
    color: "#989ba3"
  }
});
