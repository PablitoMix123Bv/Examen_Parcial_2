import {useState, useEffect} from 'react';
import {Vibration, Platform} from 'react-native';

export const useNotifications = () => {
    const [notificaciones, setNotificaciones] = useState ([]);
    
    const addNotification = () => {
        setNotificaciones( (prev) => [
            ...prev,
            {
                id: Date.now().toString(),
                mensaje: `Nueva notificación # ${prev.length + 1}`,
                leida: false,
            },
        ]);
        Vibration.vibrate(100); //Vibración por 1 segundo = 100 milisegundos
    };

    useEffect(() => {
        const interval = setInterval(() => {
            addNotification();
        }, 5000);
        return () => clearInterval(interval); //Limpieza del intervalo
    }, []);

    const markAsRead = (id) => {
        setNotificaciones((prev) => 
            prev.map((n) => (n.id === id ? {...n, leida: true}: n ))
        );
    };

    const markAllAsRead = () => {
        setNotificaciones((prev) => prev.map((n) => ({...n , leida: true})));
    };

    const unreadCount = notificaciones.filter((n) => !n.leida).length;

    return{
        notificaciones,
        unreadCount,
        markAsRead,
        markAllAsRead,
    }
};