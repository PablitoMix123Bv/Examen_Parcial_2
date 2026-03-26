import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const NotificacionItem = ({item, onMarkAsRead}) => {
    return(
        <TouchableOpacity styles = {[styles.card, item.leida && styles.cardRead]} onPress={() => onMarkAsRead(item.id)}>
            <View style = {styles.textContainer}>
                <Text style = {[styles.message, item.leida && styles.textRead]}>
                    {item.mensaje}
                </Text>
            </View>
            {!item.leida && <View style = {styles.unreadDot}/>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 15,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Sombra para Android
    elevation: 3,
  },
  cardRead: {
    backgroundColor: '#f0f0f0',
    elevation: 0,
    opacity: 0.7,
  },
  textContainer: { flex: 1 },
  message: { fontSize: 16, color: '#333', fontWeight: '500' },
  textRead: { color: '#888', textDecorationLine: 'line-through' },
  unreadDot: {
    width: 10,
    height: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    marginLeft: 10,
  },
});

export default NotificacionItem;