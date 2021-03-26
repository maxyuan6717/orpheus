import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import StyledTitle from "../components/Title";
import * as Progress from "react-native-progress";

const Day = () => {
  const [day, setDay] = useState(1);
  return (
    <View style={styles.container}>
      {/* <Title text="Orpheus Pledge" /> */}
      <StyledTitle>Day {day}/21</StyledTitle>
      <View>
        <Progress.Bar
          progress={day / 21}
          width={null}
          height={10}
          borderRadius={5}
          style={{ marginHorizontal: 30, marginVertical: 10 }}
          color="#49d15f"
        />
      </View>
      <ScrollView>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionHeader}>
            Daily story: Change as a Form of Death
          </Text>
          <Text>
            One of the most powerful lessons I learned in my education and
            training is the idea that change, in often small, but nonetheless
            important ways is a kind of death. Moving to a new house, or town,
            or school, causes a person to recognize that things are not as they
            once were. This is true even when the change is potentially a good
            thing. Researchers at Stanford looked at how much people would save
            for a future self depending on their appearance and future traits.
            People saved significantly less for future selves unlike them. This
            makes sense, because when you change, you are a different person, a
            stranger. As such that current self is dead in a meaningful way.
            That’s part of the challenge of changing behaviors, you are killing
            a self in some sense and creating a stranger.
          </Text>
          <Text style={styles.descriptionHeader}>
            Think about the following
          </Text>
          <Text>
            Answer one or some of the questions—Did you look at your device?
            What was your change in usage? Did the decrease in usage change your
            mood?
          </Text>
          <Text>
            When have you been able/not able to identify with your future self?
            How can you better be able to recognize change in your life?
          </Text>
          <Text>Fill in your screen time log.</Text>
        </View>
        <View style={styles.buttonRow}>
          <Pressable
            style={styles.button}
            onPress={() => {
              setDay(Math.max(1, day - 1));
            }}
          >
            <Text style={styles.buttonText}>Previous Day</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => {
              setDay(Math.min(21, day + 1));
            }}
          >
            <Text style={styles.buttonText}>Next Day</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  descriptionContainer: {
    marginHorizontal: 30,
  },
  descriptionHeader: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 10,
  },
  buttonRow: {
    marginTop: 10,
    marginBottom: 50,
    justifyContent: "center",
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 20,
    padding: 8,
    backgroundColor: "#eee",
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
  },
});

export default Day;
