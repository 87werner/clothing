export const addItemsToCart =(cartItems, cartItemToAdd) =>{
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id) //return first item found based of a condition

    if(existingCartItem){
        return cartItems.map(cartItem =>  // map creates a new array this allows our state to update and then re-render. 
            cartItem.id === cartItemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
            )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}