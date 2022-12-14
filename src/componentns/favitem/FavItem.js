import React from "react";
import styles from './FavItem.module.scss'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { openModalAC } from "../../store/modal/actionCreators";
import { addFavoritesAC } from "../../store/addFavorites/actionCreator";
import PropTypes from 'prop-types'
import { modalTextAC } from "../../store/modalText/actionCreators";
import Button from "../button/button";



const FavItem = (props) => {
    const dispatch = useDispatch()
    const products = useSelector(store =>store.products.value,shallowEqual)
    const id =props.id
    const index =products.findIndex(el =>el.id ===id)
    const fill = props.fill

    return (
        <>

            <ul>
                <li><span>Name:</span>{props.name}</li>
                <li><span>Price:</span>{props.price}</li>
                <li><img className={styles.image} src={props.url} alt='Product ' /></li>
                <li><span>Art:</span>{props.art}</li>
           
            <svg onClick = {() =>{
                localStorage.setItem('index',index)
                localStorage.setItem('id',id)
                dispatch(addFavoritesAC())
                dispatch({type:'setProducts'})}} version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="40.000000pt" height="26.000000pt" viewBox="0 0 1280.000000 1216.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.15, written by Peter Selinger 2001-2017
</metadata>
<g transform="translate(0.000000,1216.000000) scale(0.100000,-0.100000)"
fill={fill} stroke="none">
<path d="M5890 10598 c-332 -755 -736 -1674 -898 -2043 -161 -368 -295 -671
-297 -673 -2 -2 -308 -25 -682 -52 -373 -27 -1054 -76 -1513 -109 -459 -34
-1087 -79 -1395 -101 -308 -22 -585 -43 -615 -46 l-54 -6 49 -47 c28 -25 336
-300 684 -611 349 -311 806 -718 1016 -905 1267 -1130 1560 -1391 1572 -1400
17 -13 74 228 -542 -2265 -256 -1036 -464 -1887 -463 -1890 2 -4 869 499 1928
1117 1058 618 1931 1122 1940 1120 8 -2 398 -242 865 -532 468 -291 1165 -724
1550 -963 385 -239 811 -504 947 -588 135 -85 249 -154 253 -154 4 0 4 17 0
38 -6 34 -411 1897 -776 3568 -87 402 -159 738 -159 747 0 13 649 563 2997
2542 258 217 261 220 230 227 -18 4 -1011 104 -2207 223 -1196 119 -2184 220
-2196 225 -15 6 -62 111 -199 446 -98 242 -412 1013 -697 1714 -285 701 -564
1388 -620 1525 -56 138 -104 253 -108 258 -3 4 -278 -610 -610 -1365z"/>
</g>
</svg>
                <Button  className={styles.addCart_btn} handleClick = {() =>{
    dispatch(openModalAC())
     dispatch(modalTextAC('Do you want to add this product to cart'))
     dispatch({type:'SET_VALUE_INDEX',payload:index})}}  text={'Add cart'}></Button> </ul>
      </>
    )
  }       
FavItem.propTypes  = {
    name:PropTypes.string,
    price:PropTypes.number,
    url:PropTypes.string,
    art:PropTypes.number,
   
    
    }
    FavItem.defaultProps ={
    
        name:'Product name',
        price:0,
        url:'',
        art:0,
    }
    

export default FavItem