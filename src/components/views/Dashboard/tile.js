import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";

const TileView = ({ color, cost, category, tap }) => {
  return (
    <View style={[styles.tileAn, { backgroundColor: color }]}>
          <Avatar.Icon style={styles.icon} color={color} size={26} icon="folder" />
          <Text style={styles.tileCost}>{cost}</Text>
          <Text style={styles.tileCategory}>{category}</Text>
          {tap && <Text style={styles.TapHere}>Tap here to view more</Text> }
        </View>
  )
}

const styles = StyleSheet.create({
  tileAn: {
    width: "45%",
    minHeight: 150,
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
  },
  icon: {
    backgroundColor: '#fff'
  },
  tileCost: {
    color: '#fff',
    fontSize: 18,
    marginTop: 8,
    fontWeight: 'bold',
  },
  tileCategory: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 8,
    fontWeight: 'bold',
  },
  TapHere: {
    color: '#fff',
    fontSize: 12,
    marginVertical: 8,
    fontWeight: 'bold',
    position: "absolute",
    bottom: 3,
    left: 10,
  }
})

export default TileView
