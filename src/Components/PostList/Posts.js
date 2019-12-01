import React from "react";
import PropTypes from "prop-types";

import PostCard from "../PostCard/PostCard";
import { Text } from "react-native";

export default function Posts({ posts, isLoading }) {
  if (isLoading) return null;

  return posts && posts.length > 0 && !isLoading ? (
    posts.map((post, index) => (
      <PostCard post={post} index={index} key={index} />
    ))
  ) : (
    <Text>Sorry no posts</Text>
  );
}

Posts.propTypes = {
  posts: PropTypes.array,
  isLoading: PropTypes.bool
};
