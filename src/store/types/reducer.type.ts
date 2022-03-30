import {Action, AnyAction, PayloadAction} from "./action.type";

export type Reducer<S = any, A extends Action = AnyAction> = (store: S | undefined, action: A) => S

export type ReducerMap<S = any, A extends Action = AnyAction> = {
    [K in keyof S]: Reducer<S[K], A>
}
