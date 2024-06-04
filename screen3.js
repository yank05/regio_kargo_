import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const startStation = "Station 1";
  const endStation = "Station 2";

  return (
    <View style={styles.container}>
      <View style={styles.information}>
        <Text style={styles.informationText}>Einstieg: {startStation}</Text>
      </View>
      <View style={styles.information}>
        <Text style={styles.Time}>Ankunft in XX Sek</Text>
        <TouchableOpacity  style={styles.button}>
        <Text style={styles.buttonText}>QR-Code scannen</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center', 
    justifyContent: 'center', 
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
  information: {
    marginTop: 20,
  },
  informationText: {
    fontSize: 20,
    fontWeight: 'bold', 
  },
  Time: {
    fontSize: 20,
    color: '#ff0000', 
  },
  button: {
    backgroundColor: 'rgb(55, 181, 233)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '45%',
    marginTop: '5%', 
  },
});

export default SettingsScreen;
