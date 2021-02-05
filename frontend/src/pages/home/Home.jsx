import React, { useState, useEffect } from 'react'
import Banner from "../../components/banner/Banner"
import CategoriesSection from "../../components/categories-section/CategoriesSection"
import ProductCard from "../../components/product-card/ProductCard"
import "./Home.css"
import AppContext from '../../context/AppContext'

//Axios
import axios from 'axios'
import Loading from '../../components/loading/Loading'
import Footer from '../../components/footer/Footer'



const Home = () => {
    // State of courses list
    const [courses, setCourses] = useState([])

    // State of filter courses for title
    const { filter, searching, loading, setLoading } = React.useContext(AppContext)

    const { setFilter, setSearching } = React.useContext(AppContext)

    const handleSearch = e => {
        if (e.target.value) {
            setFilter(true)
        } else {
            setFilter(false)
        }

        setSearching(e.target.value)
    }


    // Get data with Axios
    useEffect(() => {
        axios.get('http://localhost:8080/courses')
            .then(
                response => setCourses(response.data),
                setLoading(false)
            )
            .catch(error => console.log(error))
    }, [])

    // Rendering component
    return (
        <>


            <div className="home">
                <Banner />


                {loading ? <Loading /> : ""}

                <div className="container mt-5">
                    <h3 className="text-center">
                        Colaboramos con más de 200 universidades y empresas líderes
                    </h3>

                    <div class="horizontal-scroll-contenedor">
                        <div>Contenedor 1</div>
                        <div>Contenedor 2</div>
                        <div>Contenedor 3</div>
                        <div>Contenedor 4</div>
                        <div>Contenedor 5</div>
                        <div>Contenedor 6</div>
                        <div>Contenedor 7</div>
                        <div>Contenedor 8</div>
                        <div>Contenedor 9</div>
                        <div>Contenedor 10</div>
                        <div>Contenedor 11</div>
                        <div>Contenedor 12</div>
                        <div>Contenedor 13</div>
                        <div>Contenedor 14</div>
                        <div>Contenedor 15</div>
                        <div>Contenedor 16</div>
                        <div>Contenedor 17</div>
                        <div>Contenedor 18</div>
                        <div>Contenedor 19</div>
                        <div>Contenedor 20</div>
                    </div>
                </div>

                <h3 className="text-center mt-4">
                    Alcanza tus metas
                </h3>


                <h3 className="text-center mt-4">
                    Resultado de los estudiantes
                </h3>

                <h3 className="text-center mt-4">
                    Profesores más populares
                </h3>



                <h2 className="m-4">Categorias principales</h2>
                <CategoriesSection />

                <Footer />
            </div>
        </>
    )
}


export default Home
