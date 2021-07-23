import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card, Divider } from 'react-native-paper';

const ProductItem = ({ itemName, price, pcsIn, pcsLast, image }) => {
  return (
    <Card style={styles.container}>
      <View style={styles.upperView}>
        <Image style={styles.image} source={image}/>
        <View>
          <Text style={styles.title}>{itemName}</Text>
          <Text style={styles.text}>{price}</Text>
        </View>
      </View>
      <Divider />
      <View style={styles.lowerView}>
        <View>
          <Text style={styles.title}>{pcsIn} pcs</Text>
          <Text style={styles.text}>in Stock</Text>
        </View>
        <View>
          <Text style={styles.title}>{pcsLast}pcs</Text>
          <Text style={styles.text}>last Stock</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  upperView: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 16,
    justifyContent: "flex-start",
  },
  upperIn: {
    
  },
  image: {
    height: 35,
    width: 35,
    borderRadius: 10,
    backgroundColor:"#ccc",
    marginRight: 15
  },
  title: {
    fontSize: 17,
    fontWeight:"600"
  },
  text: {
    fontSize: 14,
    fontWeight:"400"
  },
  lowerView: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  }
})

export default ProductItem;
