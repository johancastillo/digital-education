import CardShopping from "../../components/card-shopping/card-shopping"
import "./Cart.css"
import { useContext, useEffect, useState } from "react"
import AppContext from "../../context/AppContext"
import axios from 'axios'
import botonComprar from "../../components/boton-Comprar/boton-Comprar"


const Cart = () => {
    const { cartProducts } = useContext(AppContext)
    const [courses, setCourses] = useState([])
    

    // Get data with Axios
    useEffect(() => {
        axios.get('https://johancastillo.github.io/json-api-fake/digital-education/courses.json')
            .then(
                // Obteniendo los cursos
                response => setCourses(response.data)
            )
            .catch(error => console.log(error))
        }, [])
        
        let totalPrice = 0

    return (
        <div className="cart-page px-4">
            <h1 className="text-center"> Carrito de compras </h1>
            <p className="text-center">
                {
                    cartProducts.length === 0 ? "No hay productos en el carrito" : "Estos son los productos de tu carrito"
                }
            </p>
            

            {
                courses.map(
                    course => {
                        const validation = cartProducts.includes(course.id)

                        if(validation){
                            totalPrice += course.price                    
                            return (
                                <CardShopping 
                                    title={course.title}
                                    image={course.image}
                                    price={course.price}
                                />
                            )
                        }
                    }
                )
            }    
            
            <h4 className="total p-4 text-center">
                {
                    totalPrice > 0 ? `Total: $${totalPrice} USD` : ""
                }
            </h4>

            <div>
                {
                    totalPrice > 0 ? <botonComprar/> : ""
                }

            </div>
            

           
        </div>



    )


   


}



export default Cart

