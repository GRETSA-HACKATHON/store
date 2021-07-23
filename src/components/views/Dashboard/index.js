import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Avatar, Menu } from "react-native-paper";
import { LineChart } from "react-native-chart-kit";
import { useNavigation } from "@react-navigation/native";

import TileView from "./tile";
import ProductItem from "./productItem";

const Dashboard = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerNav}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="ios-grid" size={24} color="grey" />
        </TouchableOpacity>
        <Menu
          visible={visible}
          onDismiss={() => setVisible(false)}
          anchor={
            <TouchableOpacity
              onPress={() => setVisible(true)}
              style={styles.avatarView}
            >
              <Avatar.Image
                size={40}
                style={{ marginRight: 10 }}
                source={require("../../../images/black-guy.jpg")}
              />
              <Text style={{ fontweight: "bold", fontSize: 18 }}>Bonvic</Text>
            </TouchableOpacity>
          }
        >
          <Menu.Item onPress={() => setVisible(false)} title="Account" />
          <Menu.Item
            onPress={() => {
              setVisible(false);
              navigation.navigate("Login");
            }}
            title="Logout"
          />
        </Menu>
      </View>
      <View style={styles.tiles}>
        <TileView color="#5036f1" cost={"$2500"} tap category="Today sales" />
        <TileView color="#ce70a7" cost={"25"} category="Pending Orders" />
        <TileView color="#34c0eb" cost={"501"} tap category="Stock Available" />
        <TileView color="#eba834" cost={"$25002"} tap category="Today orders" />
      </View>
      <View>
        <Text style={styles.sectionTitleView}>Order View</Text>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - 32} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
      <View style={{ marginBottom: 30 }}>
        <View>
          <Text style={styles.sectionTitleView}>Top Selling Products</Text>
        </View>
        <ProductItem
          itemName={"appple Watch"}
          price="Ksh. 450"
          image={require("../../../images/watch.jpg")}
          pcsIn={12}
          pcsLast={55}
        />
        <ProductItem
          itemName={"appple Watch"}
          price="Ksh. 450"
          image={require("../../../images/watch.jpg")}
          pcsIn={12}
          pcsLast={55}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  headerNav: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatarView: {
    flexDirection: "row",
    alignItems: "center",
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

export default Dashboard;
