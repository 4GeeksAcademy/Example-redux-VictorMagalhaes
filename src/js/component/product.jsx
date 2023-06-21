import React from "react";
import { ADD_ONE, ADD_USER } from "./actions.js";
import { useDispatch } from "react-redux";
import {addUsername} from "./actions.js";

const Product = () => {

    const dispatch = useDispatch()

    return(
        
        <button onClick={()=> dispatch(addUsername('Victor'))}>Add Username</button>
    )
}

export default Product