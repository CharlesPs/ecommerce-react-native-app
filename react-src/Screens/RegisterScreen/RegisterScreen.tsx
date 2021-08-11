
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { actionRegister } from "../../Redux/Actions/SessionActions";

import styles from './RegisterScreen.styles'

import Colors from '../../Config/colors'

const RegisterScreen = (props: any) => {

    const dispatch = useDispatch()

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ password2, setPassword2 ] = useState('')

    const register = async () => {

        await dispatch(actionRegister(name, email, password, password2))
    }

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.formRow}>
                <Text style={styles.label}>
                    Name
                </Text>
                <TextInput
                    style={styles.textInput}
                    value={name}
                    onChangeText={(text: string) => setName(text)}
                />
            </View>
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
                <Text style={styles.label}>
                    Password confirmation
                </Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.textInput}
                    value={password2}
                    onChangeText={(text: string) => setPassword2(text)}
                />
            </View>
            <View style={styles.formRow}>
                <Button
                    title="Register"
                    onPress={() => register()}
                    color={Colors.Auth.PrimaryBtn}
                />
            </View>
            <View style={styles.formRow}>
                <Text
                    style={styles.forgotLink}
                    onPress={() => props.navigation.goBack()}
                >
                    Back to login
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default RegisterScreen;
