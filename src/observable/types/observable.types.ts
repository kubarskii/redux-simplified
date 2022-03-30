export type SubscribeCallback<T> = <T>(t: T) => void

export interface IObservable<T = any> {
    next: (v: T) => void
    subscribe: (cb: SubscribeCallback<T>) => void
    unsubscribe: (cb: SubscribeCallback<T>) => void
    value: T
}
