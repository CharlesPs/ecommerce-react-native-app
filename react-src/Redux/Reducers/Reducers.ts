
import { combineReducers } from "redux";

import SessionReducer from './SessionReducer'
import AccountReducer from './AccountReducer'

const Reducers = combineReducers({
    Session: SessionReducer,
    Account: AccountReducer,
})

export default Reducers
