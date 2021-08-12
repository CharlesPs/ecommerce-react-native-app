
import { StyleSheet } from "react-native";

import Colors from '../../Config/colors'

const styles = StyleSheet.create({
    bar: {
        borderBottomColor: Colors.Border,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        height: 56,
        display: 'flex',
        flexDirection: 'row',
    },
    barButton: {
        borderStyle: 'solid',
        borderRightColor: Colors.Border,
        borderRightWidth: 1,
        height: 56,
        width: 56,
        paddingHorizontal: 18,
        paddingVertical: 19,
    },
    barWhole: {
        borderStyle: 'solid',
        borderRightColor: Colors.Border,
        borderRightWidth: 1,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 14,
    },
    logo: {
    }
})

export default styles
