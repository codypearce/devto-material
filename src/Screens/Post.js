import React from "react";
import { View, Text } from "react-native";
import { Link } from "../Router";

export default function Post() {
  return (
    <View>
      <Link to="/">
        <Text>To Home</Text>
      </Link>
    </View>
  );
}
