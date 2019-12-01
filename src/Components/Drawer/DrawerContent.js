import React from "react";
import { ScrollView } from "react-native";

import KeyLinks from "./KeyLinks";
import { Button } from "material-bread";
import DrawerNavigation from "./DrawerNavigation";
import TagSection from "./TagSection";

import { isMobileNative, mobileBreakpoint } from "../../Styles/responsive";

import { isWeb } from "../../Styles/device";
import { useMediaQuery } from "react-responsive";

export default function DrawerContent() {
  const isMobile = isWeb
    ? useMediaQuery({ maxWidth: mobileBreakpoint })
    : isMobileNative;

  const mytags = [
    "javascript",
    "react",
    "tutorial",
    "productivity",
    "career",
    "css",
    "showdev",
    "opensource",
    "reactnative"
  ];
  const othertags = [
    "webdev",
    "beginners",
    "discuss",
    "python",
    "node",
    "devops",
    "testing",
    "typescript",
    "html",
    "angular",
    "java",
    "vue",
    "docker",
    "ruby",
    "csharp",
    "help",
    "php",
    "linux"
  ];
  return (
    <ScrollView
      style={{ padding: isMobile ? 16 : 34, height: "100%", flex: 1 }}
    >
      <DrawerNavigation />
      <TagSection tags={mytags} title="My tags" />
      <TagSection tags={othertags} title="Other Popular tags" />

      <Button
        text={"View All Tags"}
        onPress={this.toggleMenu}
        key={1}
        radius={20}
        borderSize={2}
        style={{ marginBottom: 40 }}
      />
      <KeyLinks />
    </ScrollView>
  );
}
