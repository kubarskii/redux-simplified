import Observable from "../observable/observable";
import {Action, AnyAction} from "./types/action.type";
import {Reducer, ReducerMap} from "./types/reducer.type";

type CreateStore = (s: Store) => Store

type StoreEnhancer = (fn: Store) => (r: Reducer, preloadedState?: any) => Store

type Enhancer<T = any> = (...args: T[]) => StoreEnhancer

function isStoreEnhancer(fn): fn is StoreEnhancer {
    return typeof (fn as StoreEnhancer) === "function"
}

export default class Store<S = any, A extends Action = AnyAction> extends Observable<S | undefined> {

    readonly defaultActions = {
        init: {type: 'INIT'} as AnyAction,
    }

    constructor(private reducer: Reducer, enhancerOrPreloadedState?: StoreEnhancer | S, preloadedState?: S) {
        super((typeof enhancerOrPreloadedState === 'function') ? preloadedState : enhancerOrPreloadedState);

        this.dispatch = this.dispatch.bind(this)
        this.dispatch(this.defaultActions.init)

        if (isStoreEnhancer(enhancerOrPreloadedState)) {
            return enhancerOrPreloadedState(this)(reducer, this.value)
        }

        return this
    }

    static createStore(rootReducer, enhancerOrPreloadedState?, preloadedState?) {
        return new Store(rootReducer, enhancerOrPreloadedState, preloadedState)
    }

    static combineReducers<S = any, A extends Action = AnyAction>(map: ReducerMap<S, A>): Reducer<S> {
        return function (state, action) {
            return Object.keys(map)
                .reduce((acc, reducerName) => {
                    const reducer = map[reducerName]
                    const n = state?.[reducerName]
                    acc[reducerName] = reducer(n || {}, action)
                    return acc
                }, {} as S)
        }
    }

    dispatch(action: A) {
        const nextState = this.reducer(this.value, action)
        this.next(nextState)
    }

    getState(): S | undefined {
        return this.value
    }
}
