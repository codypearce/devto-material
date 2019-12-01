import React from "react";
import PropTypes from "prop-types";
import { SheetSide, List, ListItem, Icon, Divider } from "material-bread";
import RightHeader from "./RightHeader";

export default function RightSheet({ visible, toggle }) {
  return (
    <SheetSide
      visible={!!visible}
      onBackdropPress={() => toggle(false)}
      onSwipeRight={() => toggle(false)}
    >
      <RightHeader
        name="Cody Pearce"
        handle="@codypearce"
        image={"https://avatars1.githubusercontent.com/u/12564956?s=460&v=4"}
      />

      <List>
        <ListItem
          text={"Profile"}
          icon={<Icon name={"person"} size={24} />}
          textStyle={{ lineHeight: 24 }}
        />
        <ListItem
          text={"Dashboard"}
          icon={<Icon name={"dashboard"} size={24} />}
          textStyle={{ lineHeight: 24 }}
        />
        <ListItem
          text={"Write a post"}
          icon={<Icon name={"create"} size={24} />}
          textStyle={{ lineHeight: 24 }}
        />
        <ListItem
          text={"Reading List"}
          icon={<Icon name={"local-library"} size={24} />}
          textStyle={{ lineHeight: 24 }}
        />
        <ListItem
          text={"Settings"}
          icon={<Icon name={"settings"} size={24} />}
          textStyle={{ lineHeight: 24 }}
        />
        <ListItem
          text={"Key Links"}
          icon={<Icon name={"link"} size={24} />}
          textStyle={{ lineHeight: 24 }}
        />
        <ListItem
          text={"Signout"}
          icon={<Icon name={"exit-to-app"} size={24} />}
          textStyle={{ lineHeight: 24 }}
        />
      </List>
      <Divider />
    </SheetSide>
  );
}

RightSheet.propTypes = {
  visible: PropTypes.bool,
  toggle: PropTypes.func
};
