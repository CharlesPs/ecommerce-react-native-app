
import React from "react"
import { Button, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useDispatch } from "react-redux"
import { actionLogout } from "../../Redux/Actions/SessionActions"

const CartScreen = (props: any) => {

    const dispatch = useDispatch()

    const logout = () => {

        dispatch(actionLogout())
    }

    return (
        <SafeAreaView>
            <Text>
                CartScreen
            </Text>
            <Button title="Logout" onPress={() => logout()} />
        </SafeAreaView>
    )
}

export default CartScreen
