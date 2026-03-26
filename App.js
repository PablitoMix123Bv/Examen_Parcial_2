//En estas lineas estamos aplicando conceptos como ESModules 
import { FlatList, View, Text} from "react-native";
import NotificacionItem from "./src/components/NotificacionesItem"; //Importación por defecto
import { useNotifications } from "./src/hooks/useNotificactions"; //Esta es una importación referenciada
import {globalStyles as styles} from "./src/styles/globalStyles"

const App = () => {
  const {notificaciones, unreadCount, markAsRead, markAllAsRead} = useNotifications();
  return (
    <View style = {styles.container}>
      <FlatList
        data = {notificaciones}
        keyExtractor = {(item) => item.id}
        renderItem = {({item}) => (
          <NotificacionItem
            item = {item}
            onMarkAsRead = {markAsRead}
          />
        )}
      />
    </View>
  );
}
export default App;