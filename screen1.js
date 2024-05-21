import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Screen1 = () => {
  const [start, setStart] = useState('');
  const [ziel, setZiel] = useState('');
  const [abfahrtszeit, setAbfahrtszeit] = useState('');

  const handlePlanRoute = () => {
    // Hier kannst du die Logik für die Routenplanung implementieren
    console.log('Route geplant:', start, ziel, abfahrtszeit);
    // Zum Beispiel:
    // API-Aufruf für die Routenberechnung
  };

  return (
    <View style={styles.container}>
      <View style={styles.routeBox}>
      <TextInput
        style={styles.input}
        placeholder="Start"
        value={start}
        onChangeText={setStart}
      />
      <TextInput
        style={styles.input}
        placeholder="Ziel"
        value={ziel}
        onChangeText={setZiel}
      />
      <TextInput
        style={styles.input}
        placeholder="Abfahrtszeitpunkt"
        value={abfahrtszeit}
        onChangeText={setAbfahrtszeit}
      />
      <TouchableOpacity style={styles.button} onPress={handlePlanRoute}>
        <Text style={styles.buttonText}>Route planen</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  routeBox: {
  marginTop: 50, 
  borderWidth: 5,
  borderColor: '#ccc',
  borderRadius: 15,
  padding: 10,
  marginBottom: 20,
  width: '90%',
  alignItems: 'center', 
  },
  input: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 15,
    width: '60%',
    height: 50,
    fontFamily: 'Tahoma',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#37b5e9',
    borderRadius: 3,
    borderWidth: 3,
    borderColor: '#37b5e9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Tahoma',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Screen1;