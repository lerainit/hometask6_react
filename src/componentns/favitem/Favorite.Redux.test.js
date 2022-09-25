import { addFavorites } from "../../store/addFavorites/actions";
import addFavoritesReducer from "../../store/addFavorites/reducer";
import { setFav } from "../../store/addFavorites/actions";

const initialState = {
    value: [],
}

describe('addFavoritesReducer works', () => {

    test('should addFavorites reducer return initial state', () => {
        expect(addFavoritesReducer(undefined, { type: undefined })).toEqual(initialState)
    })
    test('should addFavorites set value', () => {
        expect(addFavoritesReducer(initialState, { type: setFav })).toEqual({
            value: JSON.parse(localStorage.getItem('addFavorites'))
        })
    })

    test('should addFavorites reducer change value', () => {
        expect(addFavoritesReducer(initialState, { type: addFavorites })).toEqual({
            value: JSON.parse(localStorage.getItem('addFavorites'))
        })
    })


})