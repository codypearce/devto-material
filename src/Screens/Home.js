import React from "react";
import { View, Text } from "react-native";
import { Link } from "../Router";

export default function Home() {
  return (
    <View>
      <Link to="/post/1">
        <Text>To Post</Text>
      </Link>
    </View>
  );
}
