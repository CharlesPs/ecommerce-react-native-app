
import React, { useEffect, useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack'

import { actionCheckAuthenticated } from './react-src/Redux/Actions/SessionActions'
import { useDispatch, useSelector } from 'react-redux'

import SplashScreen from './react-src/Screens/SplashScreen'
import LoginScreen from './react-src/Screens/LoginScreen/LoginScreen'
import RegisterScreen from './react-src/Screens/RegisterScreen/RegisterScreen'
import HomeScreen from './react-src/Screens/HomeScreen/HomeScreen'
import CartScreen from './react-src/Screens/CartScreen/CartScreen'

const Stack = createNativeStackNavigator()
const App = () => {

    const navigationOptions: NativeStackNavigationOptions = {
        headerShown: false,
    }

    const dispatch = useDispatch()

    const isAuthenticated = useSelector((state: any) => state.Session.isAuthenticated)

    const [ sessionChecked, setSessionChecked ] = useState(false)

    const getInitialRouteName = () => {

        if (!sessionChecked) {

            return 'Splash'
        } else {

            return 'Home'
        }
    }

    useEffect(() => {

        const checkToken = async () => {

            await dispatch(actionCheckAuthenticated())

            setSessionChecked(true)
        }

        checkToken()

    }, [ isAuthenticated ])

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={getInitialRouteName()} screenOptions={navigationOptions}>
                {!sessionChecked ? (
                    <Stack.Screen name="Splash" component={SplashScreen} />
                ) : (
                    <>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        {!isAuthenticated ? (
                            <>
                                <Stack.Screen name="Login" component={LoginScreen} />
                                <Stack.Screen name="Register" component={RegisterScreen} />
                            </>
                        ) : (
                            <Stack.Screen name="Cart" component={CartScreen} />
                        )}
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App