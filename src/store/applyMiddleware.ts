import {Store} from ".."
import {compose} from "./compose"
import {Dispatch} from "./types/dispatch.type"
import {StoreType} from "./types/store.type"

/*
* Middleware contract
* (store) => (next) => (action) => next(action)
* */

/*
* Enhancer that wraps store creation function
* */
export const applyMiddleware = (...middlewares) => (store) => (reducer, preparedState?): StoreType => {
    let state
    if (store instanceof Store) {
        state = store
    } else if (typeof store === 'function') {
        state = store(reducer, preparedState)
    } else {
        throw {
            message: 'store is not Store or createStore function',
        }
    }
    
    let dispatch: Dispatch = () => {
        throw new Error(`dispatch call was prevented`)
    }

    const api = {
        getState: state.getState,
        dispatch: (...args) => state.dispatch(...args)
    }

    state.dispatch = compose(...middlewares.map(middleware => middleware(api)))(state.dispatch)

    return state
}
