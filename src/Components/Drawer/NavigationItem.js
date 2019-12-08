import React from "react";
import PropTypes from "prop-types";
import { ListItem, Icon } from "material-bread";
import theme from "../../Styles/theme";

export default function NavigationItem({ title, icon, iconColor }) {
  return (
    <ListItem
      text={title}
      textStyle={{
        color: "#9a9da5",
        lineHeight: 24,
        fontFamily: theme.fontFamily
      }}
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
