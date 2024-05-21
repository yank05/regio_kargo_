import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  // Sample data for start and end stations
  const startStation = "Station 1";
  const endStation = "Station 2";

  return (
    <View style={styles.container}>
      {/* Information Section */}
      <View style={styles.information}>
        <Text style={styles.informationText}>Einstieg: {startStation} <br/>
        Ausstieg: {endStation}</Text>
      </View>
        {/* Placeholder for Map */}
        <View style={styles.mapPlaceholder}></View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  overview: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  overviewTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mapPlaceholder: {
    width: '100%',
    aspectRatio: 16/9, // Example aspect ratio, adjust as needed
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  information: {
    marginTop: 20,
  },
  informationText: {
    fontSize: 16,
  },
});

export default SettingsScreen;
