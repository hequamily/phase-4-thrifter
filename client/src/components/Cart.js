import CartItem from './CartItem'
import React, {useState} from 'react'

function Cart ({cart, removeFromCart}){

    const [checkedOut, setCheckedOut] = useState(false)

    function toggleCheckOut(){
        setCheckedOut(checkedOut => !checkedOut)
    }

    const priceArray = cart.map(cartItem => {
        return Number(cartItem.item_price) 
    })
   
    let sum = 0
    for(let price of priceArray){ 
        sum  = sum +  price
        
    }
    

    if(checkedOut){
     return (
        <div className="cart">
            
             <h1 className="order-confirmation" >Thank you for your purchase! your order is being processed</h1>
           
        </div>
     )           
    }else{
        
        return(
<div className="cart">
            
           <ul className="cart-list" >
                {cart.map(cartItem => {
                return <CartItem key={cartItem.id} cartItem={cartItem} removeFromCart={removeFromCart} />
            })}</ul>
            
            <h4 className="cart-total" >Cart Total:${sum}</h4>
            <button class="btn btn-dark" onClick={toggleCheckOut} >CHECK OUT</button> 
            
        </div>
        )
    }



// import React, { useState } from 'react';
// import CartItem from './CartItem';

// function Cart({ cart, removeFromCart }) {
//   const [checkedOut, setCheckedOut] = useState(false);

//   function toggleCheckOut() {
//     setCheckedOut(checkedOut => !checkedOut);
//   }

//   const totalPrice = cart.reduce((total, cartItem) => {
//     return total + Number(cartItem.price);
//   }, 0);

//   if (checkedOut) {
//     return (
//       <div className="cart">
//         <h1 className="order-confirmation">
//           Thank you for your purchase! Your order is being processed.
//         </h1>
//       </div>
//     );
//   } else {
//     return (
//       <div className="cart">
//         <ul className="cart-list">
//           {cart.map(cartItem => (
//             <CartItem
//               key={cartItem.id}
//               cartItem={cartItem}
//               removeFromCart={removeFromCart}
//             />
//           ))}
//         </ul>

//         <h4 className="cart-total">Cart Total: ${totalPrice}</h4>
//         <button className="btn btn-dark" onClick={toggleCheckOut}>
//           CHECK OUT
//         </button>
//       </div>
//     );
//   }
}

export default Cart;










    // return (
    //     <div className="cart">
    //         <h1>My Cart</h1>
            
    //         {checkedOut ? <h1>Thank you for your purchase! your order is being processed</h1>
    //         : <ul className="cart-list" >
    //             {cart.map(cartItem => {
    //             return <CartItem key={cartItem.id} cartItem={cartItem} removeFromCart={removeFromCart} />
    //         })}</ul>
            
    //         <h4>Cart Total:${sum}</h4>
    //         <button className="checkout-button" onClick={toggleCheckOut} >CHECK OUT</button> }
            
    //     </div>
    // )
// }

// export default Cart;