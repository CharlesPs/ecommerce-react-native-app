
type AccountState = {
    data: {
        name: string,
        email: string
    }
}

type Action = {
    type: string,
    payload: any
}

const initialState: AccountState = {
    data: {
        name: '',
        email: ''
    }
}

const AccountReducer = (state = initialState, { type, payload }: Action) => {

    const st = { ...state }

    if (type === 'ACCOUNT_SET_DATA') {

        st.data = payload
    } else if (type === 'ACCOUNT_UNSET_DATA') {

        st.data = initialState.data
    }

    return st
}

export default AccountReducer
