import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Signup from "../components/views/signup";
import Login from "../components/views/login";
import Dashboard from "../components/views/Dashboard";
import StockAnalytics from "../components/views/stockAnalytics";
import ProductSales from "../components/views/Orders";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Draw = () => {
  return <Drawer.Navigator initialRouteName="Dashboard">
  <Drawer.Screen name="Dashboard" component={Dashboard} />
  <Drawer.Screen name="StockAnalytics" component={StockAnalytics} />
  <Drawer.Screen name="ProductSales" component={ProductSales} />
</Drawer.Navigator>
}

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Drawer" component={Draw} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
