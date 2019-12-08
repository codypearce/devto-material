import React from "react";
import PropTypes from "prop-types";

import { Button } from "material-bread";
import { withRouter } from "react-router";
import theme from "../../Styles/theme";

function PostFilter({ title, filter, type, history, active }) {
  function HandleNavigate() {
    const link = type ? `?${type}=${filter}` : "/";

    history.push(link);
  }
  return (
    <Button
      text={title}
      type="flat"
      radius={20}
      color={active ? "#1e88e5" : "#f3f3f4"}
      textColor={active ? "#fff" : "#91959c"}
      onPressIn={() => HandleNavigate()}
      style={{ marginBottom: 4 }}
      textStyle={{ fontFamily: theme.fontFamily }}
    />
  );
}

PostFilter.propTypes = {
  title: PropTypes.string,
  filter: PropTypes.string,
  type: PropTypes.string,
  history: PropTypes.object,
  active: PropTypes.bool
};

export default withRouter(PostFilter);
