import React from "react";
import PropTypes from "prop-types";

import { View } from "react-native";
import { Divider, BodyText, ListItem, Icon, Badge } from "material-bread";

export default function ThreadListItem({ commentNumber, text, divider }) {
  return (
    <View>
      <ListItem
        leadingActionItem={<Icon name="forum" size={20} color="#1abc9c" />}
        actionItem={
          <Badge
            size={16}
            content={commentNumber}
            maxValue={999}
            right={-10}
            top={-4}
            containerStyle={{ padding: 4 }}
          >
            <Icon name="comment" size={18} color={"#34495e"} />
          </Badge>
        }
        style={{
          paddingBottom: 12,
          paddingRight: 12,
          paddingLeft: 12,
          paddingTop: 12
        }}
      >
        <BodyText style={{ fontSize: 12, fontWeight: "600", marginBottom: 4 }}>
          {text}
        </BodyText>
      </ListItem>

      {divider ? (
        <Divider marginVertical={0} style={{ marginBottom: 0, marginTop: 0 }} />
      ) : null}
    </View>
  );
}

ThreadListItem.propTypes = {
  commentNumber: PropTypes.number,
  text: PropTypes.string,
  divider: PropTypes.bool
};
