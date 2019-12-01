import React from "react";
import PropTypes from "prop-types";
import { Heading } from "material-bread";

export default function SectionHeader({ title }) {
  return (
    <Heading
      type={6}
      text={title}
      color={"#226ef4"}
      style={{ marginBottom: 24 }}
    />
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string
};
