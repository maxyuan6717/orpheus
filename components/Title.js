import React from "react";
import { StyleSheet, View, Text } from "react-native";

const StyledTitle = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: "20%",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
});

export default StyledTitle;
