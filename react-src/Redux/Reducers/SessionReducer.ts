
type SessionState = {
    isAuthenticated: boolean
}

const initialState: SessionState = {
    isAuthenticated: false,
}

const SessionReducer = (state = initialState, action: any) => {

    const st = { ...state }

    if (action.type === 'SESSION_START') {

        st.isAuthenticated = true
    } else if (action.type === 'SESSION_END') {

        st.isAuthenticated = false
    }

    return st
}

export default SessionReducer
