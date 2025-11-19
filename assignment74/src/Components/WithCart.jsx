import { useContext } from "react";
import { CartContext } from "../App";

function withCart(IncomingComponent){
        function OutGoingComponent(props){
            const {cart, setCart} = useContext(CartContext);
            return(
                <IncomingComponent {...props} cart={cart} setCart={setCart}/>
            )
        }
        return OutGoingComponent;
}

export default withCart;