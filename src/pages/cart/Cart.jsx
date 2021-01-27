import CardShopping from "../../components/card-shopping/card-shopping"
import "./Cart.css"
import {useContext} from "react"
import AppContext from "../../context/AppContext"

const Cart = () => {
    const {cartProducts} = useContext (AppContext)
    return (
    <div className="cart-page" >
    <h1> Carrito de compras </h1>

    {
      cartProducts.map(
          producto => (<div> {producto} <div/>)
        )
    }
    <CardShopping/> 
    </div>
    


    

    
} 

export default Cart

