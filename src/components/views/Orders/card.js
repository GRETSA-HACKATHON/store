import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Avatar, Card, Divider } from "react-native-paper";

const CardProduct = () => {
  return (
    <Card elevation={2} style={styles.container}>
      <View style={styles.nameView}>
        <Text style={styles.productId}>#ProductId</Text>
        <Text style={styles.person}>Alex Doe</Text>
        <View style={styles.dateView}>
          <Feather name="calendar" size={20} color="#fff" />
          <Text style={styles.dates}>23 Jul 2021</Text>
        </View>
      </View>
      <Divider />
      <View style={styles.totalView}>
        <Text style={styles.totalName}>Total</Text>
        <Text style={styles.totalSum}>$634</Text>
      </View>
      <Divider />
      <View>
        <View style={styles.productView}>
          <Text>1 x </Text>
          <Image style={styles.image} source={require('../../../images/watch.jpg')}/>
          <Text>Apple watch</Text>
        </View>
        <View style={styles.productView}>
          <Text>2 x </Text>
          <Image style={styles.image} source={require('../../../images/watch.jpg')}/>
          <Text>Apple watch</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor:"#ccc",
    marginRight: 15
  },
  nameView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    backgroundColor: "#ad57cf",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 5,
  },
  productId: {
    color: "#fff",
    fontSize: 13
  },
  person: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  dateView: {
    flexDirection: "row",
    alignItems: "center",
  },
  dates: {
    color: "#fff",
    fontSize: 13,
    marginLeft: 5,
  },
  totalView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  totalName: {
    fontSize: 16,
  },
  totalSum: {
    fontSize: 18,
    fontWeight: "700",
  },
  productView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
  }
})

export default CardProduct;
