import React from 'react'
import './custom-buttom.styles.scss'

const CustomButton = ({children, isGoogleSigIn, inverted, ...otherProps}) => {
    return (
       <button className= {`
       ${inverted ? 'inverted' : '' } 
       
       ${isGoogleSigIn ? 'google-sign-in' : '' } custom-button `} {...otherProps} >
        {children}
       </button>
    )
}

export default CustomButton 
