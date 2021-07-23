import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.login}>
      <Image source={require('../../../images/loginImag.png')} style={styles.image} />
      <View style={styles.form}>
      <Text style={styles.title}>Login</Text>
        <TextInput
          label="Email"
          placeholder="Your email ID"
          style={styles.input}
          right={<TextInput.Icon name="email" />}
        />
        <TextInput
          label="Password"
          placeholder="Password"
          style={styles.input}
          right={<TextInput.Icon name="eye" />}
        />
        <Button style={styles.button} mode="contained" onPress={() => navigation.navigate("Drawer", { screen: "Dashboard"})}>
          Log In
        </Button>
        <View style={styles.signup}>
          <Text>Don't have an account? </Text>
          <Button onPress={() => navigation.navigate("Signup")}>Signup here</Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  image: {
    backgroundColor: "#ccc",
    height: "50%",
    width: "100%",
    alignItems: "center",
  },
  form: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  input: {
    marginVertical: 10,
    backgroundColor: "#fff",
  },
  button: {
    marginVertical: 15,
    width: "40%",
    padding: 6,
  },
  signup: {
    alignItems: "center",
    flexDirection: "row",
  }
});

export default Login;
