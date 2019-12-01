import React, { useState } from "react";
import PropTypes from "prop-types";
import { Chip, Hoverable } from "material-bread";

function NavChip({ title, style }) {
  const initialState = {
    backgroundColor: "#f3f3f4"
  };

  const [backgroundColor, setbackgroundColor] = useState(
    initialState.backgroundColor
  );

  return (
    <Hoverable
      onHoverIn={() => setbackgroundColor("#000")}
      onHoverOut={() => setbackgroundColor("#f3f3f4")}
    >
      <Chip
        text={`#${title}`}
        radius={2}
        chipStye={"outlined"}
        visible={true}
        style={[
          {
            padding: 0,
            height: 20,
            marginBottom: 8,
            marginRight: 8,
            backgroundColor: backgroundColor
          },

          style
        ]}
        textStyles={{
          fontSize: 11,
          lineHeight: 14,
          marginLeft: 6,
          marginRight: 6,
          color: "#9fa1a9",
          fontWeight: "600"
        }}
      />
    </Hoverable>
  );
}

NavChip.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
  history: PropTypes.object
};

export default NavChip;
