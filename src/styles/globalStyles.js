import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5', 
        paddingTop: 50,
        paddingHorizontal: 15,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    badge: {
        backgroundColor: 'red', 
        color: 'white',
        borderRadius: 10,
        padding: 5,
        fontWeight: 'bold',
    },
    readAllBtn: {
        backgroundColor: 'blue', 
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 15,
    },
    readAllText: {
        color: 'white', 
        fontSize: 16,
        fontWeight: 'bold',
    }
});