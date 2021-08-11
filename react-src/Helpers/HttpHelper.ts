
import axios from 'axios';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getHeaders = async () => {

    try {

        const uniqid = uuidv4()

        const headers: any = {
            'X-CONSUMER-ID': `MOBILE_APP-${Platform.OS.toUpperCase()}`,
            'X-REQUEST-ID': uniqid,
            'Content-Type': 'application/json'
        }

        const userToken = await AsyncStorage.getItem('userToken')

        if (userToken !== '') {

            headers['Authorization'] = `Bearer ${userToken}`
        }

        return headers
    } catch (error) {

        throw error
    }
}

const onRequest = (method: string, request_id: string, data: any) => {

    console.log(`API ${method} REQUEST`, `Request Id: ${request_id}`, data)
}

const onSuccess = (apiStart: any, method: string, request_id: string, data: any) => {

    const apiEnd = moment()

    const diff = apiEnd.diff(apiStart)

    console.log(`API ${method} SUCCESS`, `${diff} ms`, `Request Id: ${request_id}`, data)
}

const onError = (apiStart: any, method: string, request_id: string, error: any) => {

    const apiEnd = moment()

    const diff = apiEnd.diff(apiStart)

    console.log(`API ${method} ERROR`, `${diff} ms`, `Request Id: ${request_id}`, error)
}

export const post = async (url: string, data: any, tag = '') => {

    const apiStart = moment()

    const headers = await getHeaders()

    try {

        onRequest('POST', headers['X-REQUEST-ID'], { tag, url, data })

        const res = await axios.post(url, data, { headers })

        console.log({ res })

        if (res.status !== 200) {

            const message = res.data.message || res.data

            throw {
                request_id: headers['X-REQUEST-ID'],
                message,
                status: res.status
            }
        } else {

            onSuccess(apiStart, 'POST', headers['X-REQUEST-ID'], res)

            return res.data
        }
    } catch (error) {

        onError(apiStart, 'POST', headers['X-REQUEST-ID'], error)
    }
}
