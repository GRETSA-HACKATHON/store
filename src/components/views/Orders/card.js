import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";

const CardProduct = () => {
  return (
    <View>
      <View>
        <Text>#ProductId</Text>
        <Text>Alex Doe</Text>
        <View>
          <Feather name="calendar" size={24} color="black" />
          <Text>23 Jul 2021</Text>
        </View>
      </View>
      <View>
        <Text>Total</Text>
        <Text>$634</Text>
      </View>
      <View>
        <Text>1 x </Text>
        <Avatar.Icon icon="folder" />
      </View>
    </View>
  );
};

export default CardProduct;
