import { addFavorites,setFav } from "./actions";


const initialValue = {
   value:[],
  }
  
  const addFavoritesReducer = (state = initialValue, action) => {

 switch (action.type) {
   case setFav:{
    return { value: JSON.parse(localStorage.getItem('addFavorites')) }
   }
       
   case addFavorites: {

         
          return { value:JSON.parse(localStorage.getItem('addFavorites'))}
        }
  
        default: {
          return state;
        }
    }
  };

  export default addFavoritesReducer;