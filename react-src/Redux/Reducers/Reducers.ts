
import { combineReducers } from "redux";

import SessionReducer from './SessionReducer'

const Reducers = combineReducers({
    Session: SessionReducer,
})

export default Reducers
