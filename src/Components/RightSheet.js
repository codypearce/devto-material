import React from "react";
import PropTypes from "prop-types";
import { SheetSide, List, ListItem, Icon } from "material-bread";

export default function RightSheet({ visible, toggle }) {
  return (
    <SheetSide
      visible={!!visible}
      onBackdropPress={() => toggle(false)}
      onSwipeRight={() => toggle(false)}
    >
      <List>
        <ListItem
          text={"Attractions"}
          icon={<Icon name={"local-movies"} size={24} />}
        />
        <ListItem
          text={"Dining"}
          icon={<Icon name={"local-dining"} size={24} />}
        />
        <ListItem text={"Education"} icon={<Icon name={"edit"} size={24} />} />
        <ListItem text={"Health"} icon={<Icon name={"favorite"} size={24} />} />
        <ListItem text={"Family"} icon={<Icon name={"group"} size={24} />} />
        <ListItem
          text={"Office"}
          icon={<Icon name={"content-cut"} size={24} />}
        />
        <ListItem
          text={"Promotions"}
          icon={<Icon name={"loyalty"} size={24} />}
        />
      </List>
    </SheetSide>
  );
}

RightSheet.propTypes = {
  visible: PropTypes.bool,
  toggle: PropTypes.func
};
