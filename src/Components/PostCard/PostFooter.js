import React from "react";
import PropTypes from "prop-types";

import Box from "../Box";
import PostUser from "./PostUser";
import PostActions from "./PostActions";
import {
  mobileSmallBreakpoint,
  isMobileSmallNative
} from "../../Styles/responsive";
import { isWeb } from "../../Styles/device";
import { useMediaQuery } from "react-responsive";

export default function PostFooter({ post }) {
  const isMobile = isWeb
    ? useMediaQuery({ maxWidth: mobileSmallBreakpoint })
    : isMobileSmallNative;
  return (
    <Box
      type={isMobile ? "column" : "row"}
      alignItems={isMobile ? "flex-start" : "center"}
      justifyContent={"space-between"}
      marginTop={20}
    >
      <PostUser
        userImage={post.user.profile_image}
        userName={post.user.name}
        publishDate={post.readable_publish_date}
        devUserName={post.user.username}
      />
      <PostActions
        reactions={post.positive_reactions_count}
        comments={post.comments_count}
        isMobile={isMobile}
      />
    </Box>
  );
}

PostFooter.propTypes = {
  post: PropTypes.object
};
