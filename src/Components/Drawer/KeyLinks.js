import React from "react";
import { View } from "react-native";

import DrawerSection from "./DrawerSection";
import SectionHeader from "../SectionHeader";
import Box from "../Box";
import KeyLink from "./KeyLink";

export default function KeyLinks() {
  return (
    <DrawerSection>
      <SectionHeader title="Key Links" />
      <View>
        <Box type={"row"}></Box>
        <Box type={"column"}>
          <KeyLink url={"https://dev.to/about"} title={"About"} />
          <KeyLink url={"https://dev.to/sponsors"} title={"Sponsers"} />
          <KeyLink url={"https://shop.dev.to/"} title={"DEV Shop"} />
          <KeyLink url={"https://dev.to/privacy"} title={"Privacy Policy"} />
          <KeyLink url={"https://dev.to/terms"} title={"Terms of Use"} />
          <KeyLink url={"https://dev.to/contact"} title={"Contact"} />
          <KeyLink url={"https://dev.to/faq"} title={"FAQ"} />
          <KeyLink
            url={"https://dev.to/code-of-conduct"}
            title={"Code of Conduct"}
          />
        </Box>
      </View>
    </DrawerSection>
  );
}
