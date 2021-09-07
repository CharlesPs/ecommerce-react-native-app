
import SessionService from "../../Services/SessionService";

export const actionCheckAuthenticated = () => {

    return async (dispatch: any) => {

        try {

            const token = await SessionService.getToken()

            if (token) {

                dispatch({
                    type: 'SESSION_START'
                })
            }

            return token
        } catch (error) {

            throw error
        }
    }
}

export const actionRegister = (name: string,
                                email: string,
                                password: string,
                                password_confirmation: string) => {

    return async (dispatch: any) => {

        try {

            const data = await SessionService.register(name, email, password, password_confirmation)

            if (data.token) {

                dispatch({ type: 'SESSION_START', payload: {
                    token: data.token
                } })

                dispatch({ type: 'ACCOUNT_SET_DATA', payload: {
                    name: data.user.name,
                    email: data.user.email,
                } })
            }
        } catch (error) {

            throw error
        }
    }
}

export const actionLogin = (email: string, password: string) => {

    return async (dispatch: any) => {

        try {

            const data = await SessionService.login(email, password)

            if (data.token) {

                dispatch({ type: 'SESSION_START', payload: {
                    token: data.token
                } })

                dispatch({ type: 'ACCOUNT_SET_DATA', payload: {
                    name: data.user.name,
                    email: data.user.email,
                } })
            }
        } catch (error) {

            throw error
        }
    }
}

export const actionLogout = () => {

    return async (dispatch: any) => {

        try {

            await SessionService.logout()

            dispatch({ type: 'SESSION_END'})
            dispatch({ type: 'ACCOUNT_UNSET_DATA'})
        } catch (error) {

            throw error
        }
    }
}
