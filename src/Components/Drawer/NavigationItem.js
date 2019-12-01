import React from "react";
import PropTypes from "prop-types";
import { ListItem, Icon } from "material-bread";

export default function NavigationItem({ title, icon, iconColor }) {
  return (
    <ListItem
      text={title}
      textStyle={{ color: "#9a9da5", lineHeight: 24 }}
      style={{ borderRadius: 8 }}
      rippleProps={{
        rippleContainerBorderRadius: 8
      }}
      media={<Icon name={icon} size={20} color={iconColor} />}
    />
  );
}

NavigationItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  iconColor: PropTypes.string
};
