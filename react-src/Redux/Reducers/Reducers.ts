
import { combineReducers } from "redux";

import SessionReducer from './SessionReducer'
import AccountReducer from './AccountReducer'
import ProductsReducer from './ProductsReducer'

const Reducers = combineReducers({
    Session: SessionReducer,
    Account: AccountReducer,
    Products: ProductsReducer,
})

export default Reducers
