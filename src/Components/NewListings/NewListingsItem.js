import React from "react";
import PropTypes from "prop-types";

import { View } from "react-native";
import { Divider, BodyText, ListItem } from "material-bread";
import NavChip from "../NavChip";

export default function FloatingCardListItem({ tag, text, divider }) {
  return (
    <View>
      <ListItem
        style={{
          paddingBottom: 12,
          paddingRight: 8,
          paddingLeft: 8,
          paddingTop: 12
        }}
      >
        <NavChip title={tag} />
        <BodyText style={{ fontSize: 12, fontWeight: "600" }}>{text}</BodyText>
      </ListItem>

      {divider ? (
        <Divider marginVertical={0} style={{ marginBottom: 0, marginTop: 0 }} />
      ) : null}
    </View>
  );
}

FloatingCardListItem.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string,
  divider: PropTypes.bool
};
