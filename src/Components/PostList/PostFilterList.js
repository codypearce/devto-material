import React from "react";
import PropTypes from "prop-types";

import PostFilter from "./PostFilter";
import Box from "../Box";
import queryString from "query-string";
import { withRouter } from "react-router";
import { isMobileNative, mobileBreakpoint } from "../../Styles/responsive";

import { isWeb } from "../../Styles/device";
import { useMediaQuery } from "react-responsive";

function PostFilterList({ isLoading, location }) {
  if (isLoading) return null;

  const isMobile = isWeb
    ? useMediaQuery({ maxWidth: mobileBreakpoint })
    : isMobileNative;

  const queries = queryString.parse(location.search);

  let active = "Feed";
  const daysToString = {
    "7": "Week",
    "30": "Month",
    "365": "Year",
    "9999": "Infinity"
  };

  if (queries && queries.top) {
    active = daysToString[queries.top];
  } else if (queries && queries.state) {
    active = "Latest";
  }

  return (
    <Box
      type={"row"}
      justifyContent={isMobile ? "center" : "space-between"}
      flexWrap={"wrap"}
      padding={24}
      style={{ backgroundColor: "white" }}
    >
      <PostFilter title="Feed" active={active == "Feed"} />
      <PostFilter
        title="Week"
        filter={"7"}
        type={"top"}
        active={active == "Week"}
      />
      <PostFilter
        title="Month"
        filter={"30"}
        type={"top"}
        active={active == "Month"}
      />
      <PostFilter
        title="Year"
        filter={"365"}
        type={"top"}
        active={active == "Year"}
      />
      <PostFilter
        title="Infinity"
        filter={"9999"}
        type={"top"}
        active={active == "Infinity"}
      />
      <PostFilter
        title="Latest"
        filter={"fresh"}
        type={"state"}
        active={active == "Latest"}
      />
    </Box>
  );
}

PostFilterList.propTypes = {
  title: PropTypes.string,
  isLoading: PropTypes.bool,
  location: PropTypes.object
};

export default withRouter(PostFilterList);
