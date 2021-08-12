
import { StyleSheet } from "react-native";

import Colors from '../../Config/colors'

const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colors.Auth.Background,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 32
    },
    form: {
        borderColor: Colors.Auth.FormBorder,
        borderWidth: 1,
        borderStyle: 'solid',
        paddingTop: 48,
        paddingBottom: 12,
    },
    formRow: {
        marginHorizontal: 32,
        marginBottom: 16,
    },
    label: {
        color: Colors.FormLabel,
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 4,
        textTransform: 'uppercase',
    },
    textInput: {
        backgroundColor: '#f6f7fb',
        borderRadius: 8,
        height: 40,
        paddingHorizontal: 8,
    },
    forgotLink: {
        color: Colors.FormLabel,
        marginTop: 4,
        textAlign: 'center',
        textDecorationLine: 'underline',
    }
})

export default styles
