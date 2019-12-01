import React from "react";
import PropTypes from "prop-types";

import { StyleSheet } from "react-native";
import { Card } from "material-bread";

import PostFilterList from "./PostFilterList";
import Posts from "./Posts";
import PostsError from "./PostsError";
import Loader from "../Loader";
import { screenHeight } from "../../Styles/dimensions";

export default function PostList({ isLoading, hasError, posts }) {
  return (
    <Card shadow={0} style={styles.list}>
      <Loader isLoading={isLoading} />
      <PostsError isLoading={isLoading} hasError={hasError && !isLoading} />
      <PostFilterList isLoading={isLoading} />
      <Posts posts={posts} isLoading={isLoading} />
    </Card>
  );
}

const styles = StyleSheet.create({
  list: {
    flexDirection: "column",
    flex: 1,
    minHeight: screenHeight
  }
});

PostList.propTypes = {
  posts: PropTypes.array,
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool
};
