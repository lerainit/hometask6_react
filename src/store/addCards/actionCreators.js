
import { addCart, deleteCard, clearCart } from "./actions";





export const addCartAC = () => async (dispatch) => {
    const index = JSON.parse(localStorage.getItem('index'))

    const products = JSON.parse(localStorage.getItem('products'))
    const addCardsArr = JSON.parse(localStorage.getItem('addCards'))
    console.log(addCardsArr)

    addCardsArr.push(products[index])

    localStorage.setItem('addCards', JSON.stringify(addCardsArr))

    dispatch({ type: addCart })

}

export const deleteCardAC = () => async (dispatch) => {
    const index = JSON.parse(localStorage.getItem('index'))


    const addCardsArr = JSON.parse(localStorage.getItem('addCards'))
    console.log(addCardsArr)
    console.log(index)

    addCardsArr.splice(index, 1)

    localStorage.setItem('addCards', JSON.stringify(addCardsArr))
    dispatch({ type: deleteCard })

}
export const clearCartAC = () => ({ type: clearCart })


