import React from "react";
import { ScrollView, View, Text, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import { LineChart } from "react-native-chart-kit";
import {useQuery} from "@apollo/client";

import TileView from "./tile";
import ProductItem from "./productItem";
import {GET_ALL_PRODUCTS} from "../../../graphql/queries/AllQueries";

const Dashboard = () => {
  // use this to get the data for the four boxes
  const {data} = useQuery(GET_ALL_STOCKS);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerNav}>
        <Ionicons name="ios-grid" size={24} color="grey" />
        <View style={styles.avatarView}>
          <Avatar.Image
            size={40}
            style={{ marginRight: 10 }}
            source={require("../../../images/black-guy.jpg")}
          />
          <Text style={{ fontweight: "bold", fontSize: 18 }}>Bonvic</Text>
        </View>
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
      <View>
        <View>
          <Text style={styles.sectionTitleView}>Top Selling Products</Text>
        </View>
        <ProductItem />
        <ProductItem />
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
