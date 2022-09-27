import React from 'react'
import PropTypes from 'prop-types'

const Button = ({className,handleClick,text})=>{
return (
    <>
    <button className={className} onClick = {handleClick}>{text}</button>
    </>
)


}
Button.propTypes ={
    className:PropTypes.string,
    handleClick:PropTypes.func,
    text:PropTypes.string
}
Button.defaultProps ={
    className:'',
    handleClick:()=>{},
    text:'Button'


}

export default Button