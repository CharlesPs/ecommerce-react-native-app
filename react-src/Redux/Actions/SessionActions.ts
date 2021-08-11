
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

export const actionLogin = (email: string, password: string) => {

    return async (dispatch: any) => {

        try {

            const data = await SessionService.login(email, password)

            if (data.token) {

                dispatch({
                    type: 'SESSION_START'
                })
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
        } catch (error) {

            throw error
        }
    }
}
