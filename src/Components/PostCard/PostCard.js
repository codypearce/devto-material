import React, { useState } from "react";
import PropTypes from "prop-types";

import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Divider, Hoverable } from "material-bread";
import { withRouter } from "react-router";

import PostImage from "./PostImage";
import PostTitle from "./PostTitle";
import PostTags from "./PostTags";
import PostFooter from "./PostFooter";

function PostCard({ post, index, history }) {
  const initialState = {
    backgroundColor: "#fff"
  };

  const [backgroundColor, setbackgroundColor] = useState(
    initialState.backgroundColor
  );

  return (
    <Hoverable
      onHoverIn={() => setbackgroundColor("#f1f1f1")}
      onHoverOut={() => setbackgroundColor("#fff")}
    >
      <TouchableWithoutFeedback
        onPress={() => history.push(`/post/${post.id}`)}
      >
        <View
          key={post.id}
          shadow={0}
          style={[
            styles.card,
            {
              backgroundColor: backgroundColor,
              cursor: "pointer"
            }
          ]}
        >
          <PostImage
            image={post.cover_image}
            show={index == 0 && !!post.cover_image}
          />
          <PostTags tags={post.tag_list} />
          <PostTitle title={post.title} />
          <PostFooter post={post} />
          <Divider style={{ marginTop: 18, marginBottom: 0 }} />
        </View>
      </TouchableWithoutFeedback>
    </Hoverable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "auto",
    borderWidth: 0,
    padding: 16,
    paddingBottom: 0
  }
});

PostCard.propTypes = {
  post: PropTypes.object,
  index: PropTypes.number,
  history: PropTypes.object,
  location: PropTypes.object
};

export default withRouter(PostCard);
