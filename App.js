// App.js
import React, { useState } from 'react';
import { View, StyleSheet, Modal, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import BottomTabNavigator from './BottomTabNavigator'; // Importiere die Hauptseite

const App = () => {
  const [showModal, setShowModal] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleConfirm = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <Image source={require('./Logo.png')} style={styles.logo} />
            <Text style={styles.modalTitle}>Anmelden</Text>
            <TextInput
              style={styles.input}
              placeholder="E-Mail"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Passwort"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.loginButton} onPress={handleConfirm}>
            <Text style={styles.loginButtonText}>Bestätigen</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Rest der App */}
      {!showModal && <BottomTabNavigator />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(55, 181, 233, 1)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
    width: '80%', 
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#37b5e9',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  logo: {
    width: 240,
    height: 340,
    marginBottom: 50,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default App;
