// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import { TextInput, Button } from "react-native-paper";

// const SignUp = () => {
//   return (
//     <View>
//       <View />
//       <Text>Register</Text>
//       <TextInput label="Name" placeholder="Your name" />
//       <TextInput
//         label="Email"
//         placeholder="Your email ID"
//         right={<TextInput.Icon name="email" />}
//       />
//       <TextInput
//         label="Password"
//         placeholder="Password"
//         right={<TextInput.Icon name="eye" />}
//       />
//       <Button>Forgot Password?</Button>
//       <Button mode="contained" onPress={() => console.log("Pressed")}>
//         Submit
//       </Button>
//       <Text>
//         Don't have an account? <Button>Signup here</Button>
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {},
//   image: {},
// });

// export default SignUp;
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";
import {useMutation} from "@apollo/client";
import * as Yup from "yup";
import {Formik} from "formik";
import {SIGN_UP} from "../../../graphql/queries/AllQueries";

const SignUpValidation = Yup.object().shape({
  email:Yup.string().required("Please pass your email"),
  password:Yup.string().required("Please pass your password"),
  name:Yup.string().required("Please pass your email")
});

const Signup = () => {
  const [SignUpMutation] = useMutation(SIGN_UP);
  return (
    <Formik
      initialValues={{
        email:"",
        password:"",
        name:""
      }}

      onSubmit={(values)=>{
        SignUpMutation({
          variables:{
            input:{
              name:values.name,
              email:values.email,
              password:values.password
            }
          }
        })
      }}

      validationSchema={SignUpValidation}
    >
    {({handleChange,submitForm})=>(
      <View style={styles.login}>
        <Image source={require('../../../images/welcome.png')} style={styles.image} />
        <View style={styles.form}>
        <Text style={styles.title}>Register</Text>
        <TextInput name="name" label="Name" style={styles.input} placeholder="Your name" />
          <TextInput
            label="Email"
            name="email"
            placeholder="Your email ID"
            onChange={handleChange}
            style={styles.input}
            right={<TextInput.Icon name="email" />}
          />
          <TextInput
            label="Password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            style={styles.input}
            right={<TextInput.Icon name="eye" />}
          />
          <Button style={styles.button} mode="contained" onPress={submitForm}>
            Submit
          </Button>
          <View style={styles.signup}>
            <Text>Already have an account? </Text>
            <Button>Login here</Button>
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

export default Signup;

