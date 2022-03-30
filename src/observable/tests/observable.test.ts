import Observable from "../observable"

describe('Observable tests', () => {
    it('should create Observable', () => {
        const stringObservable = new Observable('');
        expect(stringObservable).toBeTruthy();
    })

    it('should be able to subscribe to value change', () => {
        const cb = jest.fn()
        const observable = new Observable('')
        observable.subscribe((newValue) => {
            cb(newValue)
        })
        observable.next('test')
        expect(cb).toHaveBeenCalledWith('test')
    })

    it('should unsubscribe', () => {
        const observable = new Observable('')
        const cb = jest.fn()
        const cb2 = jest.fn()

        observable.subscribe(cb)
        observable.subscribe(cb2)

        observable.next('test')
        observable.unsubscribe(cb)
        observable.next('test2')

        expect(cb).toHaveBeenCalledTimes(1)
        expect(cb2).toHaveBeenCalledTimes(2)
        expect(observable.value).toBe('test2')

    })

    it('should return value', () => {
        const observable = new Observable('placeholder')
        expect(observable.value).toBe('placeholder')
    })

})
