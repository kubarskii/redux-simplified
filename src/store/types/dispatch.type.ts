import { Action, AnyAction } from "./action.type";

export type Dispatch<A extends Action = AnyAction> = (action: A) => void
