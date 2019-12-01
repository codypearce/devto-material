import React from "react";
import PropTypes from "prop-types";

import Box from "../Box";
import PostUser from "./PostUser";
import PostActions from "./PostActions";

export default function PostFooter({ post }) {
  return (
    <Box
      type={"row"}
      alignItems={"center"}
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
      />
    </Box>
  );
}

PostFooter.propTypes = {
  post: PropTypes.object
};
