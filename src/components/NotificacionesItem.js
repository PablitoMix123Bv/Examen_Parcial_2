import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Animated, Vibration } from 'react-native';

const NotificacionItem = ({ item, onMarkAsRead }) => {
  // Animación básica
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Vibracion de la noti
    Vibration.vibrate(100);

    // Animación cuando aparecen las notis 
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      <TouchableOpacity
        style={[styles.card, item.leida ? styles.cardRead : styles.cardUnread]}
        onPress={() => onMarkAsRead(item.id)}
      >
        <Text style={styles.message}>
          {item.mensaje}
        </Text>

        <Text style={styles.statusText}>
          Estado: {item.leida ? 'Leída' : 'No leída'}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    // Sombra básica (puntos extra)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  cardUnread: {
    backgroundColor: 'white',
    // Diferente estilo (borde azul) para no leídas (puntos extra)
    borderLeftWidth: 5,
    borderLeftColor: 'blue',
  },
  cardRead: {
    backgroundColor: '#e0e0e0', // fondo gris claro
  },
  message: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  statusText: {
    color: 'gray',
    marginTop: 5,
  }
});

export default NotificacionItem;