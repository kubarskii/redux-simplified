import Store from '../store'
import {simpleReducer, increase, decrease} from './mock'

describe("Redux store tests", () => {

    it('should create store', () => {
        const store = new Store(simpleReducer)
        expect(store).toBeTruthy()
    })

    it('should create state with factory method', () => {
        const store = Store.createStore(simpleReducer)
        expect(store).toBeTruthy()
    })

    it('should dispatch actions', () => {
        const store = new Store(simpleReducer)
        store.dispatch(increase)
        expect(store.value.count).toBe(1)
        store.dispatch(decrease)
        expect(store.value.count).toBe(0)
    })

})
