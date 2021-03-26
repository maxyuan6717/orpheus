import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import StyledTitle from "../components/Title";
import * as Progress from "react-native-progress";
import { program } from "../ProgramText";

const Day = () => {
  const [day, setDay] = useState(1);
  //   console.log(program[0].questions);
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
      <KeyboardAwareScrollView extraScrollHeight={80}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionHeader}>
            Daily story: {program[day - 1].story_title}
          </Text>
          <Text>{program[day - 1].story_body}</Text>
          <Text style={styles.descriptionHeader}>
            Think about the following
          </Text>
          {program[day - 1].questions.map((question, index) => {
            // return <Text>{question}</Text>;
            return (
              <View key={index}>
                <Text>{question}</Text>
                <TextInput
                  multiline={true}
                  numberOfLines={4}
                  style={styles.textInput}
                />
              </View>
            );
          })}
        </View>
        <View style={styles.buttonRow}>
          {day > 1 && (
            <Pressable
              style={styles.button}
              onPress={() => {
                setDay(Math.max(1, day - 1));
              }}
            >
              <Text style={styles.buttonText}>Previous Day</Text>
            </Pressable>
          )}
          {day < 21 && (
            <Pressable
              style={styles.button}
              onPress={() => {
                setDay(Math.min(21, day + 1));
              }}
            >
              <Text style={styles.buttonText}>Next Day</Text>
            </Pressable>
          )}
        </View>
      </KeyboardAwareScrollView>
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
  textInput: {
    borderColor: "#eee",
    borderRadius: 5,
    borderWidth: 1,
    marginVertical: 10,
    minHeight: 40,
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
