import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ONE, MINUS_ONE } from "./actions.js";

const Cart = () =>{

    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    console.log(state);


    return (
    <div className="text-center">
        <div><h1>Items inside cart: {state.numberOfItems}</h1></div>
        <div><h2>Usename: {state.username}</h2></div>
        <button onClick={()=> dispatch({type: ADD_ONE})}>Add item to cart</button>
        {state.numberOfItems !== 0 && 
        <button onClick={()=> dispatch({type: MINUS_ONE})}>Remove item to cart</button>
        }
    </div>
    )
}

export default Cart;
