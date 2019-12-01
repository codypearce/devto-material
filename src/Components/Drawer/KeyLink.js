import React from "react";
import PropTypes from "prop-types";

import { Anchor, BodyText } from "material-bread";

export default function KeyLink({ url, title }) {
  return (
    <Anchor url={url} target={"_blank"}>
      <BodyText style={{ marginBottom: 10, fontSize: 14, fontWeight: "600" }}>
        {title}
      </BodyText>
    </Anchor>
  );
}

KeyLink.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string
};
