
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#911d74',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    formRow: {
        marginHorizontal: 32,
        marginBottom: 16,
    },
    label: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginBottom: 4,
    },
    textInput: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        height: 40,
        paddingHorizontal: 8,
    },
    forgotLink: {
        color: '#FFFFFF',
        marginTop: 4,
        textAlign: 'center',
        textDecorationLine: 'underline',
    }
})

export default styles
