import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";
import {useMutation} from "@apollo/client";
import * as Yup from "yup";
import {Formik} from "formik";
import {SIGN_IN} from "../../../graphql/queries/AllQueries";
import { useNavigation } from '@react-navigation/native';

const SignInValidation = Yup.object().shape({
  email:Yup.string().required("Please pass your email"),
  password:Yup.string().required("Please pass your password"),
});

const Login = () => {
    const [SignInMutation] = useMutation(SIGN_IN);
    const navigation = useNavigation();
  return (
    <Formik
      initialValues={{
        email:"",
        password:""
      }}

      onSubmit={(values)=>{
        SignInMutation({
          variables:{
            input:{
              email:values.email,
              password:values.password
            }
          }
        })
      }}

      validationSchema={SignInValidation}
    >
    {({handleChange,submitForm})=>(
    <View style={styles.login}>
      <Image source={require('../../../images/loginImag.png')} style={styles.image} />
      <View style={styles.form}>
      <Text style={styles.title}>Login</Text>
        <TextInput
          label="Email"
          placeholder="Your email ID"
          name="email"
          style={styles.input}
          onChange={handleChange}
          right={<TextInput.Icon name="email" />}
        />
        <TextInput
          label="Password"
          placeholder="Password"
          name="password"
          style={styles.input}
          onChange={handleChange}
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
    )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
