import React from "react";
import PropTypes from "prop-types";
import Box from "../Box";
import NavChip from "../NavChip";

export default function PostTags({ tags }) {
  return (
    <Box type={"row"} alignItems={"center"}>
      {tags.map((tag, index) => (
        <NavChip key={index} title={tag} style={{ marginRight: 8 }} />
      ))}
    </Box>
  );
}

PostTags.propTypes = {
  tags: PropTypes.array
};
