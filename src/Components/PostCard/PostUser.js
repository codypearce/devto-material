import React from "react";
import PropTypes from "prop-types";

import { View, Image, Text, StyleSheet, Linking } from "react-native";
import { Avatar, Anchor } from "material-bread";
import Box from "../Box";

export default function PostUser({
  userImage,
  userName,
  publishDate,
  devUserName
}) {
  return (
    <Box type={"row"} alignItems={"center"}>
      <Avatar
        type="image"
        image={<Image source={{ uri: userImage }} />}
        size={40}
        onPress={() => Linking.openURL(`https://dev.to/${devUserName}`)}
        ripple
      />

      <View>
        <Anchor url={`https://dev.to/${devUserName}`} target={"_blank"}>
          <Text style={styles.userName}>{userName}</Text>
        </Anchor>
        <Text style={styles.publishDate}>{publishDate}</Text>
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  userName: {
    marginLeft: 12,
    fontWeight: "600"
  },
  publishDate: {
    marginLeft: 12,
    color: "#777"
  }
});

PostUser.propTypes = {
  userImage: PropTypes.string,
  userName: PropTypes.string,
  publishDate: PropTypes.string,
  devUserName: PropTypes.string
};
