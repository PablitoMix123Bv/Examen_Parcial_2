import { FlatList, View, Text, TouchableOpacity } from "react-native";
import NotificacionItem from "./src/components/NotificacionesItem";
import { useNotifications } from "./src/hooks/useNotificactions";
import {globalStyles as styles} from "./src/styles/globalStyles";

const App = () => {
  const {notificaciones, unreadCount, markAsRead, markAllAsRead} = useNotifications();
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notificaciones</Text>
        <Text style={styles.badge}>No leídas: {unreadCount}</Text>
      </View>
      
      <TouchableOpacity style={styles.readAllBtn} onPress={markAllAsRead}>
        <Text style={styles.readAllText}>Marcar todas como leídas</Text>
      </TouchableOpacity>

      <FlatList
        data={notificaciones}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <NotificacionItem
            item={item}
            onMarkAsRead={markAsRead}
          />
        )}
      />
    </View>
  );
}

export default App;