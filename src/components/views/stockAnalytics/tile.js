import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TileView = ({ color, cost, category }) => {
  return (
    <View style={[styles.tileAn, { backgroundColor: color }]}>
      <Text style={styles.tileCost}>{cost}</Text>
      <Text style={styles.tileCategory}>{category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tileAn: {
    width: "45%",
    minHeight: 80,
    borderRadius: 15,
    marginTop: 10,
    padding: 10,
  },
  icon: {
    backgroundColor: "#fff",
  },
  tileCost: {
    color: "#fff",
    fontSize: 18,
    marginTop: 8,
    fontWeight: "bold",
  },
  tileCategory: {
    color: "#fff",
    fontSize: 16,
    marginVertical: 8,
    fontWeight: "bold",
  },
  TapHere: {
    color: "#fff",
    fontSize: 12,
    marginVertical: 8,
    fontWeight: "bold",
    position: "absolute",
    bottom: 3,
    left: 10,
  },
});

export default TileView;
