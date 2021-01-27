import CardShopping from "../../components/card-shopping/card-shopping"
import "./Cart.css"
import { useContext, useEffect, useState } from "react"
import AppContext from "../../context/AppContext"
import axios from 'axios'

const Cart = () => {
    const { cartProducts, setLoading } = useContext(AppContext)
    const [courses, setCourses] = useState([])
    const [total, setTotal] = useState(0)

    // Get data with Axios
    useEffect(() => {
        setLoading(true)
        axios.get('https://johancastillo.github.io/json-api-fake/digital-education/courses.json')
            .then(
                // Obteniendo los cursos
                response => setCourses(response.data),
                // Cambiando el estado del componente Loading a false
                setLoading(false)
            )
            .catch(error => console.log(error))
        }, [])
        
        let totalPrice = total
    return (
        <div className="cart-page px-4" >
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

            
        </div>

    )




}

export default Cart

