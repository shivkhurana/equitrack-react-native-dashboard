import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

export default function App() {
  const portfolioData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [24500, 24600, 24400, 24700, 24800, 24900, 24532],
        strokeWidth: 2,
      },
    ],
  };

  const assets = [
    { name: 'Bitcoin', price: '$43,250.00', change: '+2.5%', color: 'green' },
    { name: 'Ethereum', price: '$2,850.00', change: '-1.2%', color: 'red' },
    { name: 'Apple Inc.', price: '$175.50', change: '+0.8%', color: 'green' },
    { name: 'Tesla Inc.', price: '$220.30', change: '-3.1%', color: 'red' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>EquiTrack Dashboard</Text>
      <Text style={styles.balance}>Total Balance</Text>
      <Text style={styles.balanceAmount}>$24,532.00</Text>
      <Text style={styles.chartTitle}>7-Day Portfolio View</Text>
      <LineChart
        data={portfolioData}
        width={screenWidth - 40}
        height={220}
        chartConfig={{
          backgroundColor: '#1e1e1e',
          backgroundGradientFrom: '#1e1e1e',
          backgroundGradientTo: '#1e1e1e',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={styles.chart}
      />
      <Text style={styles.assetsTitle}>Assets</Text>
      <ScrollView style={styles.assetsList}>
        {assets.map((asset, index) => (
          <View key={index} style={styles.assetItem}>
            <Text style={styles.assetName}>{asset.name}</Text>
            <Text style={styles.assetPrice}>{asset.price}</Text>
            <Text style={[styles.assetChange, { color: asset.color }]}>{asset.change}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  balance: {
    fontSize: 18,
    color: '#cccccc',
    textAlign: 'center',
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#00ff00',
    textAlign: 'center',
    marginBottom: 30,
  },
  chartTitle: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 10,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  assetsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 20,
    marginBottom: 10,
  },
  assetsList: {
    flex: 1,
  },
  assetItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  assetName: {
    fontSize: 16,
    color: '#ffffff',
    flex: 1,
  },
  assetPrice: {
    fontSize: 16,
    color: '#ffffff',
    flex: 1,
    textAlign: 'center',
  },
  assetChange: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'right',
  },
});
