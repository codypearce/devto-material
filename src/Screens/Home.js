import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { withRouter } from "react-router";

import PostList from "../Components/PostList/PostList";

import Layout from "../Components/Layout";

function Home({ location }) {
  const initialState = {
    value: "",
    query: "",
    posts: [],
    isLoading: false,
    hasError: false
  };

  const [posts, setPosts] = useState(initialState.posts);
  const [isLoading, setIsLoading] = useState(initialState.isLoading);
  const [hasError, setHasError] = useState(initialState.hasError);

  const fetchPosts = async () => {
    setIsLoading(true);

    try {
      const queries = location.search ? location.search : "/";

      const result = await fetch(`https://dev.to/api/articles${queries}`);
      const data = await result.json();
      setPosts(data);
      setHasError(false);
      setTimeout(() => {
        setIsLoading(false);
      }, 600);
    } catch (e) {
      setIsLoading(false);
      setHasError(true);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [location]);

  return (
    <Layout>
      <PostList posts={posts} hasError={hasError} isLoading={isLoading} />
    </Layout>
  );
}

Home.propTypes = {
  location: PropTypes.object
};

export default withRouter(Home);
