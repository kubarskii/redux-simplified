import {AnyAction} from '../types/action.type'

const defaultState = {
    count: 0
}

export const increase: AnyAction = {
    type: "INCREASE",
}
export const decrease: AnyAction = {
    type: "DECREASE",
}

export const simpleReducer = (store = defaultState, action) => {
    const {type, payload} = action
    switch (type) {
        case 'INCREASE':
            return {
                ...store,
                count: store.count + 1
            }
        case 'DECREASE':
            return {
                ...store,
                count: store.count - 1
            }
        default:
            store
    }
}
