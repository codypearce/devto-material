import React from "react";
import PropTypes from "prop-types";
import { ScrollView, View } from "react-native";

import { SheetSide, List, ListItem, Icon, Divider } from "material-bread";
import RightHeader from "./RightHeader";
import ThirdColumnContent from "../ThirdColumn/ThirdColumnContent";
import { screenHeight } from "../../Styles/dimensions";

import {
  TabletOrMobile,
  isMobileNative,
  mobileBreakpoint
} from "../../Styles/responsive";

import { isWeb } from "../../Styles/device";
import { useMediaQuery } from "react-responsive";

import theme from "../../Styles/theme";

export default function RightSheet({ visible, toggle }) {
  const isMobile = isWeb
    ? useMediaQuery({ maxWidth: mobileBreakpoint })
    : isMobileNative;
  return (
    <SheetSide
      visible={!!visible}
      onBackdropPress={() => toggle(false)}
      onSwipeRight={() => toggle(false)}
      style={{ flex: 1, width: 300 }}
    >
      <View style={{ flex: 1 }}>
        <ScrollView
          style={{
            minHeight: screenHeight,
            height: isMobile && !isWeb ? "100%" : screenHeight
          }}
          contentContainerStyle={{
            minHeight: screenHeight,
            flexGrow: 1,
            paddingBottom: 80
          }}
        >
          <View style={{ flex: 1 }}>
            <RightHeader
              name="Cody Pearce"
              handle="@codypearce"
              image={
                "https://avatars1.githubusercontent.com/u/12564956?s=460&v=4"
              }
            />

            <List>
              <ListItem
                text={"Profile"}
                icon={<Icon name={"person"} size={24} />}
                textStyle={{ lineHeight: 24, fontFamily: theme.fontFamily }}
              />
              <ListItem
                text={"Dashboard"}
                icon={<Icon name={"dashboard"} size={24} />}
                textStyle={{ lineHeight: 24, fontFamily: theme.fontFamily }}
              />
              <ListItem
                text={"Write a post"}
                icon={<Icon name={"create"} size={24} />}
                textStyle={{ lineHeight: 24, fontFamily: theme.fontFamily }}
              />
              <ListItem
                text={"Reading List"}
                icon={<Icon name={"local-library"} size={24} />}
                textStyle={{ lineHeight: 24, fontFamily: theme.fontFamily }}
              />
              <ListItem
                text={"Settings"}
                icon={<Icon name={"settings"} size={24} />}
                textStyle={{ lineHeight: 24, fontFamily: theme.fontFamily }}
              />
              <ListItem
                text={"Key Links"}
                icon={<Icon name={"link"} size={24} />}
                textStyle={{ lineHeight: 24, fontFamily: theme.fontFamily }}
              />
              <ListItem
                text={"Signout"}
                icon={<Icon name={"exit-to-app"} size={24} />}
                textStyle={{ lineHeight: 24, fontFamily: theme.fontFamily }}
              />
            </List>
            <Divider />
            <TabletOrMobile>
              <ThirdColumnContent isSheet />
            </TabletOrMobile>
          </View>
        </ScrollView>
      </View>
    </SheetSide>
  );
}

RightSheet.propTypes = {
  visible: PropTypes.bool,
  toggle: PropTypes.func
};
