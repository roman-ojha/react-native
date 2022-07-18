import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TextInput } from "react-native";

const Index = (): JSX.Element => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <TextInput
            style={styles.boxContainerTextInput}
            placeholder="username"
          />
          {/* <Text style={styles.boxContainerText}>Hello</Text> */}
        </View>
        <StatusBar />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8ff4ff",
    alignItems: "center",
    justifyContent: "center",
  },
  boxContainer: {
    width: 200,
    height: 300,
    borderRadius: 10,
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: "#ca6767",
    // transform: [{ rotate: "45deg" }],
  },
  boxContainerText: {
    alignSelf: "center",
    fontSize: 30,
    color: "white",
  },
  boxContainerTextInput: {
    borderWidth: 1,
  },
  "boxContainerTextInput:read-write": {
    fontSize: 30,
  },
});

export default Index;
