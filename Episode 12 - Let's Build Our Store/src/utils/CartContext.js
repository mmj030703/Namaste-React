import { createContext } from "react";

const CartContext = createContext({
    noOfItems: 0
});

export default CartContext;