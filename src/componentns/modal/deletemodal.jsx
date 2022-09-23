import React from 'react'
import styles from './modal.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { closeDeleteModalAC } from '../../store/modal/actionCreators'
import { deleteCardAC } from '../../store/addCards/actionCreators'



const DeleteModal = () => {

   const dispatch = useDispatch()

   const modalText = useSelector(store => store.modalText.value);
   const index = useSelector(store => store.cardIndex.value)
const addCardsArr = useSelector(store =>store.Cart.value)

//const deleteCard = () =>{
  
 //  let newAddCardsArr = addCardsArr.filter((el, index) => index !== index)

  // localStorage.setItem('addCards', JSON.stringify(newAddCardsArr))
//}
   return (


      <div className={styles.modal}>
         <div className={styles.outer_container} onClick={() => { dispatch(closeDeleteModalAC()) }}></div>
         <div className={styles.modal_main_container} >

            <button className={styles.close_btn} onClick={() => { dispatch(closeDeleteModalAC()) }}>X</button>

            <p>{modalText}</p>
            <button className={styles.modal_btn} onClick={() => {
              localStorage.setItem('index',index)
               dispatch(deleteCardAC())
               dispatch(closeDeleteModalAC())
            }} >delete from Cart</button>
         </div>
      </div>
   )
}
export default DeleteModal