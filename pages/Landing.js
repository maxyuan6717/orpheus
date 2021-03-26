import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StyledTitle from "../components/Title";

const Landing = () => {
  return (
    <View style={styles.container}>
      {/* <Title text="Orpheus Pledge" /> */}
      <StyledTitle>Orpheus Pledge Landing Page</StyledTitle>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default Landing;
