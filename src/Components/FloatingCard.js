import React from "react";
import PropTypes from "prop-types";

import { StyleSheet } from "react-native";
import { Card, CardContent } from "material-bread";

export default function FloatingCard({ children }) {
  return (
    <Card shadow={0} style={styles.card}>
      <CardContent style={styles.content}>{children}</CardContent>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    maxWidth: 280,
    width: "auto",
    marginBottom: 24
  },
  content: {
    padding: 24
  }
});

FloatingCard.propTypes = {
  children: PropTypes.node
};
