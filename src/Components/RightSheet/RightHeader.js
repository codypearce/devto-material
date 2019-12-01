import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-native";
import { Avatar, DrawerHeader } from "material-bread";

export default function RightHeader({ name, handle, image }) {
  return (
    <DrawerHeader
      title={name}
      subtitle={handle}
      style={{ paddingTop: 0 }}
      avatar={
        <Avatar
          type="image"
          image={
            <Image
              source={{
                uri: image
              }}
            />
          }
          size={40}
        />
      }
    />
  );
}

RightHeader.propTypes = {
  name: PropTypes.string,
  handle: PropTypes.string,
  image: PropTypes.string
};
