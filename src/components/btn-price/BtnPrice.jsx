import {useContext} from 'react'
import AppContext from '../../context/AppContext'


const BtnPrice = ({price, courseID}) => {
    // State of numbers courses added to cart
    const {cartProducts, setCartProducts} = useContext(AppContext)
    
    // Add course to cart with click event
    const handleClick = e => {
        let newArray = cartProducts
        newArray.push(courseID)

        setCartProducts(newArray)
        console.log(cartProducts)
    }
    
    // Rendering component
    return(
        <button id={courseID} type="button" className="btn btn-outline-dark" onClick={handleClick} >
            <span className="icon-cart"></span>
            <span className="price" style={{marginLeft: '8px'}}>{`$${price} USD`} </span>
        </button>
    )
}

export default BtnPrice
