
import React, { useState } from "react"
import { Button, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { useDispatch, useSelector } from "react-redux"
import { actionLogin } from "../../Redux/Actions/SessionActions"

import styles from "./LoginScreen.styles"
import Colors from "../../Config/colors"

const LoginScreen = (props: any) => {

    const dispatch = useDispatch()

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const login = async () => {

        await dispatch(actionLogin(email, password))
    }

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.form}>
                <View style={styles.formRow}>
                    <Text style={styles.label}>
                        Email
                    </Text>
                    <TextInput
                        keyboardType="email-address"
                        style={styles.textInput}
                        value={email}
                        onChangeText={(text: string) => setEmail(text)}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.label}>
                        Password
                    </Text>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.textInput}
                        value={password}
                        onChangeText={(text: string) => setPassword(text)}
                    />
                </View>
                <View style={styles.formRow}>
                    <Button
                        title="Login"
                        onPress={() => login()}
                        color={Colors.Auth.PrimaryBtn}
                    />
                </View>
                <View style={styles.formRow}>
                    <Button
                        title="Register"
                        onPress={() => props.navigation.navigate('Register')}
                        color={Colors.Auth.SecondaryBtn}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text
                        style={styles.forgotLink}
                        onPress={() => login()}
                    >
                        Forgot password?
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen
