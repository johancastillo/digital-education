import CardShopping from "../../components/card-shopping/card-shopping"
import "./Cart.css"
import { useContext, useEffect, useState } from "react"
import AppContext from "../../context/AppContext"
import axios from 'axios'
import PaymentMethod from "../../components/payment-method/PaymentMethod"


const Cart = () => {
    const { cartProducts, setCartProducts } = useContext(AppContext)
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

    const deleteCourseAll = () => setCartProducts([])


    return (
        <div className="cart-page px-4">
            <h1 className="text-center"> Carrito de compras </h1>
            <p className="text-center">
                {
                    cartProducts.length === 0 ? "No hay productos en el carrito" : "Estos son los productos de tu carrito"
                }
            </p>

            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-7">
                        {
                            courses.map(
                                course => {
                                    const validation = cartProducts.includes(course.id)

                                    if (validation) {
                                        totalPrice += course.price
                                        return (
                                            <CardShopping
                                                title={course.title}
                                                image={course.image}
                                                price={course.price}
                                                teacher={course.teacher}
                                                courseID={course.id}
                                            />
                                        )
                                    }
                                }
                            )
                        }

                        <div className="d-flex justify-content-between">

                            {
                                totalPrice > 0 ?
                                
                                <div className="p-4" style={{ cursor: 'pointer' }} onClick={deleteCourseAll}>
                                    <span className="icon-cart"></span>
                                    <span className="mx-2">Vaciar carrito</span>
                                </div>
                                :
                                ""
                            }

                            <h5 className="total p-4 text-center">
                                {
                                    totalPrice > 0 ? `Total: $${totalPrice} USD` : ""
                                }
                            </h5>
                        </div>

                    </div>

                    <div className="col-md-5">
                        {
                            totalPrice > 0 ? <PaymentMethod /> : ""
                        }
                    </div>
                </div>
            </div>




        </div>



    )





}



export default Cart

