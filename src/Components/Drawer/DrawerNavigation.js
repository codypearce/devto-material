import React from "react";
import { View } from "react-native";

import NavigationItem from "./NavigationItem";
import DrawerSection from "./DrawerSection";
import SectionHeader from "../SectionHeader";

export default function DrawerNavigation() {
  return (
    <DrawerSection>
      <SectionHeader title="Navigation" />
      <View>
        <NavigationItem title="Reading" icon="book" iconColor={"#34495e"} />
        <NavigationItem
          title="Listings"
          icon="assignment"
          iconColor={"#3498db"}
        />
        <NavigationItem title="Videos" icon="movie" iconColor={"#1abc9c"} />
        <NavigationItem title="Podcasts" icon="headset" iconColor={"#9b59b6"} />
      </View>
    </DrawerSection>
  );
}
