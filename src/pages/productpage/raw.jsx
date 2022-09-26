import React from "react";
import styles from './productPage.module.scss'


const Raw = ({id,name,art,price,url}) =>{
    return(
<>
<tr><td>{id}</td><td>{name}</td><td>{art}</td><td>{price}</td><td>{url}</td></tr>   
</>
)
}
export default Raw