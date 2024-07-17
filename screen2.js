import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deine Pakete</Text>
      <View style={styles.orderBox}>
        <Text style={styles.orderName}>Amazon-Bestellung</Text>
        <Text style={styles.processingStep}>Aktueller Verarbeitungsschritt:</Text>
        <Text style={styles.step}>In S-Bahn geladen</Text>
        <TouchableOpacity  style={styles.button}>
        <Text style={styles.buttonText}>Unten rechts auf jetzt abholen klicken!</Text>
      </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '5%', 
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  orderBox: {
    borderWidth: 5,
    borderColor: '#ccc',
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
    width: '90%',
  },
  orderName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', 
    margin: 5, 
  },
  processingStep: {
    fontSize: 16,
    margin: 5,
    textAlign: 'center', 
  },
  step: { 
    fontSize: 16,
    margin: 5,
    textAlign: 'center',
    fontStyle: 'italic', 
  },
  button: {
    backgroundColor: 'rgb(55, 181, 233)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
    marginTop: 5, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default OrderScreen;
