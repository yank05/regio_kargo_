import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Screen1 = () => {
  const [start, setStart] = useState('');
  const [ziel, setZiel] = useState('');
  const [abfahrtszeit, setAbfahrtszeit] = useState('');

  const handlePlanRoute = () => { 
    console.log('Route geplant:', start, ziel, abfahrtszeit);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.mainTitle}>Herzlich Willkommen bei RegioKArgo</Text>
        <Text style={styles.subtitle}>Derzeit erwartest du 1 Paket. Den Status kannst du unter "Meine Pakete" einsehen.</Text>
      </View>
      <Text style={styles.routeBoxTitle}>Jetzt passende Route checken</Text>
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
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
    marginTop: '15%',
    marginBottom: '10%', 
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 10,
    marginBottom: '5%', 
  },
  routeBoxTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  routeBox: {
    borderWidth: 5,
    borderColor: '#ccc',
    borderRadius: 15,
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 15,
    width: '100%',
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
