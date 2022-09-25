import CartReducer from "../../store/addCards/reducer"
import { addCart, clearCart, deleteCard, setCart } from "../../store/addCards/actions"


const initialState = {

    value: [],

}
describe('Cart reducer works', () => {

    test('should return the initial state', () => {
        expect(CartReducer(undefined, { type: undefined })).toEqual(initialState)

    })

    test('should  set Cart', () => {
        expect(CartReducer(initialState, { type: setCart })).toEqual({
            value: JSON.parse(localStorage.getItem('addCards'))
        })

    })

    test('should change value for addCart', () => {
        expect(CartReducer(initialState, { type: addCart })).toEqual({
            value: JSON.parse(localStorage.getItem('addCards'))
           
        })

    })
    test('should CartReducer clear Cart', () => {
        expect(CartReducer(initialState, { type: clearCart })).toEqual({
            value: []
        })
    })
    test('should change value for deleteCard', () => {
        expect(CartReducer(initialState, { type: deleteCard })).toEqual({
            value: JSON.parse(localStorage.getItem('addCards'))
        })
    })

})