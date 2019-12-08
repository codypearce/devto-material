import React from "react";
import PropTypes from "prop-types";

import { View } from "react-native";
import { Button, BodyText } from "material-bread";
import SectionHeader from "../SectionHeader";
import FloatingCard from "../FloatingCard";
import Box from "../Box";
import ThreadListItem from "./ThreadListItem";
import theme from "../../Styles/theme";

export default function ThreadCard({
  list,
  title,
  buttonText,
  bottomText,
  maxWidth
}) {
  return (
    <FloatingCard maxWidth={maxWidth}>
      <Box type={"row"} justifyContent={"space-between"}>
        <SectionHeader title={title} />
      </Box>
      <View>
        {list.map((listing, index) => (
          <ThreadListItem
            commentNumber={listing.commentNumber}
            text={listing.title}
            divider
            key={index}
          />
        ))}
      </View>
      <Button
        radius={20}
        type={"flat"}
        text={buttonText}
        textStyles={{ lineHeight: 24, fontFamily: theme.fontFamily }}
        style={{ marginTop: 12 }}
      />
      <BodyText
        style={{
          fontWeight: "700",
          fontSize: 11,
          textAlign: "center",
          marginTop: 12
        }}
      >
        {bottomText}
      </BodyText>
    </FloatingCard>
  );
}

ThreadCard.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
  buttonText: PropTypes.string,
  bottomText: PropTypes.string,
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
