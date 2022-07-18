import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

const Index = (): JSX.Element => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <Text style={styles.boxContainerText}>Hello</Text>
        </View>
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
    justifyContent: "center",
    backgroundColor: "#ca6767",
    transform: [{ rotate: "45deg" }],
  },
  boxContainerText: {
    alignSelf: "center",
    fontSize: 30,
    color: "white",
  },
});

export default Index;
