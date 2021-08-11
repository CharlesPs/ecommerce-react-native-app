
import AsyncStorage from "@react-native-async-storage/async-storage"
import EndPoints from "../Config/endpoints"
import { post } from "../Helpers/HttpHelper"

export const getToken = async () => {

    try {

        return await AsyncStorage.getItem('userToken')
    } catch (error) {

        throw error
    }
}

export const login = async (email: string, password: string) => {

    const url = EndPoints.login

    const data = { email, password }

    try {

        const res_data: any = await post(url, data, 'SESSION_LOGIN')

        await AsyncStorage.setItem('userToken', res_data.token)

        return res_data
    } catch (error) {

        throw error
    }
}

export const logout = async () => {

    try {
        await AsyncStorage.removeItem('userToken')

        return true
    } catch (error) {

        throw error
    }
}

export default {
    getToken,
    login,
    logout,
}
