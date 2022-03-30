import {Action, AnyAction} from "./action.type";
import {Dispatch} from "./dispatch.type";

export type StoreType<S = any, A extends Action = AnyAction> = {
    getState(): S
    dispatch: Dispatch<A>
}
