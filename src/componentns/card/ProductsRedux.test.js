import { setProducts } from "../../store/products/actions";
import productsReducer from "../../store/products/reducer";
const initialState ={
    value:[],
}

describe('productsReducer works',()=>{
test('should productsReducer return initinal value',()=>{
    expect(productsReducer(undefined,{type:undefined})).toEqual(initialState)
})
test('should productsReducer return initinal value',()=>{
    expect(productsReducer(initialState,{type:setProducts})).toEqual({
value:JSON.parse(localStorage.getItem('products'))
    })
})
})