import { addFavorites } from "./actions";

 export const addFavoritesAC = () => async(dispatch) =>{

    let addFavoritesArr =JSON.parse(localStorage.getItem('addFavorites'))
    let products = JSON.parse(localStorage.getItem('products'))
    let index = JSON.parse(localStorage.getItem('index'))
    let id =JSON.parse(localStorage.getItem('id'))

if (products[index].addFavorites === false) {
    products[index].addFavorites = true
    addFavoritesArr.push(products[index])

    localStorage.setItem('products', JSON.stringify(products))
    localStorage.setItem('addFavorites', JSON.stringify(addFavoritesArr))

  } else {
  
    products[index].addFavorites = false
    let delIndex = addFavoritesArr.findIndex(el => el.id === id)
  addFavoritesArr.splice(delIndex,1)
 
    localStorage.setItem('products', JSON.stringify(products))
    localStorage.setItem('addFavorites', JSON.stringify(addFavoritesArr))

  }

dispatch({type:'addFavorites'})

 }