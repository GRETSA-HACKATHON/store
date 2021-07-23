import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-native-paper";
import Navigator from "./src/navigation";
import client from "./src/apollo/client";

export default function App() {
  return (
    <ApolloProvider client={client}>
    <Provider>
      <View style={styles.container}>
        <Navigator />
      </View>
    </Provider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
