import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";

import NavChip from "../NavChip";
import DrawerSection from "./DrawerSection";
import SectionHeader from "../SectionHeader";

export default function TagSection({ tags, title }) {
  return (
    <DrawerSection>
      <SectionHeader title={title} />
      <View style={styles.drawerSectionBody}>
        {tags.map((item, index) => (
          <NavChip title={item} key={index} />
        ))}
      </View>
    </DrawerSection>
  );
}

TagSection.propTypes = {
  tags: PropTypes.array,
  title: PropTypes.string
};

const styles = StyleSheet.create({
  drawerSectionBody: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
