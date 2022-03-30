import {simpleReducer, increase, decrease} from './mock'
import {applyMiddleware} from '../applyMiddleware'
import { Store } from '../..'

describe('applyMiddleware tests', () => {
    it('should create store with middleware', () => {
        const mockFn = jest.fn()
        const simpleMiddleware = (state) => (next) => (action) => {
            mockFn(action)
            return next(action)
        }
        const store = new Store(simpleReducer, applyMiddleware(simpleMiddleware))

        store.dispatch(increase)
        store.dispatch(increase)

        expect(store).toBeTruthy()
        expect(mockFn).toHaveBeenCalledWith(increase)
        expect(store.getState().count).toBe(2)
    })
})
