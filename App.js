import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './src/components/views/Dashboard';
import Login from './src/components/views/login';
import Signup from './src/components/views/signup';
import StockAnalytics from './src/components/views/stockAnalytics';

export default function App() {
  return (
    <StockAnalytics />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
