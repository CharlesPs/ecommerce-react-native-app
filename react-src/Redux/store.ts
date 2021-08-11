
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import config from "../Config/config"

import Reducers from './Reducers/Reducers'

const logger = (store: any) => (next: any) => (action: any) => {

    let res = next(action)

    if (action.type && config.environment === 'development') {

        console.log('STORE DISPATCH', {
            type: action.type,
            content: action.content,
            newState: store.getState()
        })
    }

    return res
}

export default createStore(Reducers, applyMiddleware(logger, thunk))
