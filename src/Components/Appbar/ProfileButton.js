import React from "react";
import PropTypes from "prop-types";

import { Image } from "react-native";
import { Avatar } from "material-bread";

export default function ProfileButton({ toggle }) {
  return (
    <Avatar
      type="image"
      onPress={toggle}
      image={
        <Image
          source={{
            uri: "https://avatars1.githubusercontent.com/u/12564956?s=460&v=4"
          }}
        />
      }
      size={32}
      key={3}
      style={{ marginRight: 4 }}
    />
  );
}

ProfileButton.propTypes = {
  toggle: PropTypes.func
};
