import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useQuery } from "@apollo/client";
import { useNavigation } from '@react-navigation/native';

import TileView from "./tile";
import { Button } from "react-native-paper";
import ProductItem from "../Dashboard/productItem";
import {GET_ALL_PRODUCTS} from "../../../graphql/queries/AllQueries";

const StockAnalytics = () => {
  // use this to loop
  const {data} = useQuery(GET_ALL_PRODUCTS);
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Drawer", { screen: "Dashboard"})} style={styles.headerNav}>
        <Entypo name="chevron-left" size={28} color="black" />
        <Text style={styles.headerText}>Stock Analytics</Text>
      </TouchableOpacity>
      <View style={styles.tiles}>
        <TileView cost={200} color="#ce70a7" category="Product In" />
        <TileView cost={100} color="#5036f1" category="Product Out" />
      </View>
      <Button mode="contained" style={{ height: 40, borderRadius: 10, marginBottom: 15 }}>Add Product</Button>
      <Text style={styles.sectionTitleView}>Available Products List</Text>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
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
  tiles: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginVertical: 20,
  },
  sectionTitleView: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default StockAnalytics;
