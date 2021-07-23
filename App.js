import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-native-paper";
import Navigator from "./src/navigation";

export default function App() {
  return (
    <Provider>
      <View style={styles.container}>
        <Navigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
