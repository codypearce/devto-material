import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";

import { Searchfield, shadow } from "material-bread";
import { isWeb } from "../Styles/device";
import { isMobileNative, mobileBreakpoint } from "../Styles/responsive";
import { useMediaQuery } from "react-responsive";
import { withRouter } from "react-router";

function Search({ history }) {
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

  function HandleNavigate(search) {
    if (!search) return;
    const link = search ? `?tag=${search}` : "/";

    history.push(link);
  }

  return (
    <Searchfield
      color={isMobile ? "white" : "#f2f6ff"}
      placeholderTextColor={"#75787e"}
      key={0}
      iconProps={{
        color: "#75787e",
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
          color: "#75787e"
        }
      ]}
      value={search}
      onChangeText={search => setSearch(search)}
      onCloseIcon={() => setSearch("")}
      onSubmitEditing={() => HandleNavigate(search)}
      onKeyPress={event => {
        if (event.nativeEvent.key == "Enter") {
          HandleNavigate(search);
        }
      }}
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

Search.propTypes = {
  history: PropTypes.object
};

export default withRouter(Search);
