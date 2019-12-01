import React from "react";
import PropTypes from "prop-types";

import { View } from "react-native";
import { Icon, Button, Anchor } from "material-bread";
import SectionHeader from "../SectionHeader";
import FloatingCard from "../FloatingCard";
import NewListingItem from "./NewListingsItem";
import Box from "../Box";
import PrimaryChip from "../PrimaryChip";

export default function NewListings({ maxWidth }) {
  const totalListing = 88;
  const newListingArray = [
    { tag: "collab", title: "Looking for Tech Writers" },
    { tag: "forhire", title: "Frontend Developer" },
    { tag: "education", title: "3 Coding Tips Everyday" }
  ];
  return (
    <FloatingCard maxWidth={maxWidth}>
      <Box type={"row"} justifyContent={"space-between"}>
        <Anchor url={"https://dev.to/listings"}>
          <SectionHeader title={"New Listings"} />
        </Anchor>

        <PrimaryChip title={`${totalListing} Active`} />
      </Box>
      <View>
        {newListingArray.map((listing, index) => (
          <NewListingItem
            tag={listing.tag}
            text={listing.title}
            divider
            key={index}
          />
        ))}
      </View>
      <Button
        icon={<Icon name="add-circle" size={34} />}
        radius={20}
        type={"flat"}
        text={"Create a Listing"}
        textStyles={{ lineHeight: 24 }}
        style={{ marginTop: 12 }}
      />
    </FloatingCard>
  );
}

NewListings.propTypes = {
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
