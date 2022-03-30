export type Action<T = any> = {
    type: T
}

export type AnyAction<P = any, T = any> = {
    [key: string]: any
} & Action<T> & P

export type ExtendedAction<A = any> = {
    [K in keyof A]: A[K]
} & Action & AnyAction

export type PayloadAction<A = any, P = any> = {
    payload: P
} & ExtendedAction<A>
