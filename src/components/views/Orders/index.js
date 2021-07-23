import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import CardProduct from './card'

const ProductSales = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Drawer", { screen: "Dashboard"})} style={styles.headerNav}>
        <Entypo name="chevron-left" size={28} color="black" />
        <Text style={styles.headerText}>Pending Order List</Text>
      </TouchableOpacity>
      <CardProduct />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    marginTop: 20,
  },
  headerNav: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProductSales
