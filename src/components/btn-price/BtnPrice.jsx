import { useContext, useState } from 'react'
import AppContext from '../../context/AppContext'


const BtnPrice = ({ price, courseID }) => {
    // State of numbers courses added to cart
    const { cartProducts, setCartProducts } = useContext(AppContext)
    const validation = cartProducts.includes(courseID)
    
    const [inCart, setInCart] = useState(validation) 
    
    // Add course to cart with click event
    const handleClick = e => {

        if (!validation) {
            let newArray = cartProducts
            newArray.push(courseID)

            setCartProducts(newArray)
            setInCart(true)
            
        }else if(validation){
            window.location += 'cart'
        }

    }

    // Rendering component
    if(!inCart){
        return (
            <button id={courseID} type="button" className="btn btn-outline-dark" onClick={handleClick} >
                <span className="icon-cart"></span>
                <span className="price" style={{ marginLeft: '8px' }}>{`$${price} USD`} </span>
            </button>
        )
    }else if(inCart){
        return (
            <div onClick={handleClick} style={{cursor: 'pointer'}}>  
                <span className="icon-check-circle mx-1 text-blue"></span>
                <span className="text-blue">En carrito</span>
            </div>
        )
    }
}

export default BtnPrice
