import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#F8F9A0',
        paddingTop: 60,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        color: '#1A1A1A'
    }
});