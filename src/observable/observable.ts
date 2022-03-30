import { IObservable, SubscribeCallback } from "./types/observable.types"

export default class Observable<T = any> implements IObservable<T> {

    private subscriptions: Array<SubscribeCallback<T>> = []

    constructor(private _value: T) {
    }

    get value() {
        return this._value
    }

    subscribe(cb: SubscribeCallback<T>): void {
        this.subscriptions.push(cb)
    }

    unsubscribe(cb: SubscribeCallback<T>): void {
        const cbIndex = this.subscriptions.indexOf(cb)
        if (cbIndex >= 0)
            this.subscriptions.splice(cbIndex, 1)
    }

    next(v: T): void {
        this._value = v
        this.subscriptions.forEach(fn => {
            fn(v)
        })
    }

}
