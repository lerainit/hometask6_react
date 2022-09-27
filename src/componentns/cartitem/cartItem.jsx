import React from 'react';
import styles from './cartItem.module.scss';
import { useDispatch } from 'react-redux';
import { openDeleteModalAC } from '../../store/modal/actionCreators';
import { modalTextAC } from '../../store/modalText/actionCreators';
import PropTypes from 'prop-types'
import Button from '../button/button';


const CartItem = (props) => {
    const dispatch = useDispatch();

 
    const index = props.index

    return (
        <>
<div className={styles.cart_item}>
            <ul>
                <li><span>Name:</span>{props.name}</li>
                <li><span>Price:</span>{props.price}</li>
                <li><img className={styles.image} src={props.url} alt='Product ' /></li>
                <li><span>Art:</span>{props.art}</li>

 
            </ul>

<Button className={styles.del_from_cart_btn} handleClick={() => {
 dispatch(openDeleteModalAC())
 dispatch(modalTextAC('Do you want to add this product to cart'))
 dispatch({type:'SET_VALUE_INDEX',payload:index}) }} text ={'X'}
               ></Button>
</div>
        </>
    )
}
CartItem.propTypes  = {
    name:PropTypes.string,
    price:PropTypes.number,
    url:PropTypes.string,
    art:PropTypes.number,
    id:PropTypes.number,
   
    
    }
    CartItem.defaultProps ={
    
        name:'Product name',
        price:0,
        url:'',
        art:0,
        id:-1,
        fill:'#fff'
    
    }
export default CartItem;

