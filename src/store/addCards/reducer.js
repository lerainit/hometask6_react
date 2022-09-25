import { addCart, deleteCard, clearCart, setCart } from "./actions";



const initialValue = {
  value: [],
}

const CartReducer = (state = initialValue, action) => {

  switch (action.type) {

    case setCart: {
      return { value: JSON.parse(localStorage.getItem('addCards')) }

    }

    case addCart: {


      return { value: JSON.parse(localStorage.getItem('addCards')) }

    }


    case deleteCard: {


      return { value: JSON.parse(localStorage.getItem('addCards')) }

    }
    case clearCart: {
      localStorage.setItem('addCards', JSON.stringify([]))
      return { value: [] }
    }

    default: {
      return state;
    }
  }

};

export default CartReducer;