import React from "react";
import PropTypes from "prop-types";
import { Heading } from "material-bread";

export default function PostTitle({ title }) {
  return (
    <Heading
      color={"#3e3c54"}
      style={{
        fontSize: 28,
        fontWeight: "700"
      }}
    >
      {title}
    </Heading>
  );
}

PostTitle.propTypes = {
  title: PropTypes.string
};
