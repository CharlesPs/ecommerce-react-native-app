
type SessionState = {
    isAuthenticated: boolean,
    token: string,
}

type Action = {
    type: string,
    payload: any
}

const initialState: SessionState = {
    isAuthenticated: false,
    token: ''
}

const SessionReducer = (state = initialState, { type, payload }: Action) => {

    const st = { ...state }

    if (type === 'SESSION_START') {

        st.isAuthenticated = true
        st.token = payload.token
    } else if (type === 'SESSION_END') {

        st.isAuthenticated = false
        st.token = ''
    }

    return st
}

export default SessionReducer
