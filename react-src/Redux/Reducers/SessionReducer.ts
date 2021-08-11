
type SessionState = {
    isAuthenticated: boolean
}

type Action = {
    type: string
}

const initialState: SessionState = {
    isAuthenticated: false,
}

const SessionReducer = (state = initialState, { type }: Action) => {

    const st = { ...state }

    if (type === 'SESSION_START') {

        st.isAuthenticated = true
    } else if (type === 'SESSION_END') {

        st.isAuthenticated = false
    }

    return st
}

export default SessionReducer
