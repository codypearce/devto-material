import React from "react";
import PropTypes from "prop-types";
import { Chip } from "material-bread";
import theme from "../Styles/theme";

export default function PrimaryChip({ title }) {
  return (
    <Chip
      text={title}
      radius={2}
      chipStye={"flat"}
      visible={true}
      color={"#1466f4"}
      style={{ padding: 2, height: 22, marginBottom: 8 }}
      onPress={() => {
        return;
      }}
      textStyles={{
        fontSize: 12,
        lineHeight: 12,
        marginLeft: 6,
        marginRight: 6,
        color: "white",
        fontWeight: "600",
        fontFamily: theme.fontFamily
      }}
    />
  );
}

PrimaryChip.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object
};
