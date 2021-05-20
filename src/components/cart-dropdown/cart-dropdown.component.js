import React from 'react';
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item.component.js'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss';

const CartDropDown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-item' >
       {
           cartItems.map((cartItem) => (
               <CartItem key={cartItem.id} item={cartItem} />
           ))
       }
        </div>
       
        <CustomButton >Go To Check Out</CustomButton>
    </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
cartItems
})
export default connect(mapStateToProps)(CartDropDown)