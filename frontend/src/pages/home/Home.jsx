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
        axios.get('https://johancastillo.github.io/json-api-fake/digital-education/courses.json')
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

                <div className="mt-4 px-5 d-flex justify-content-between">
                    <div>

                    </div>

                    <div>
                        <input type="text" onChange={handleSearch} placeholder="Empieza a buscar..." className="form-control" />
                    </div>
                </div>
                
                { loading ? <Loading /> : "" }

                <div className="gallery">
                    {
                        // Rendering courses list
                        filter ?
                            courses.map(course => {
                                const wordSearching = searching.toLowerCase()
                                const titleSearching = course.title.toLowerCase()
                                const validation = titleSearching.includes(wordSearching)

                                if (validation) {
                                    return (
                                        <ProductCard
                                            key={course.courseID}
                                            courseID={course.id}
                                            image={course.image}
                                            title={course.title}
                                            stars={course.stars}
                                            type={course.type}
                                            price={course.price}
                                            teacher={course.teacher}
                                            teacherImg={course.teacherImg}
                                            description={course.description}
                                        />
                                    )
                                } else {
                                    <h1 className="text-center">
                                        No se hay resultados de {`"${wordSearching}"`}
                                    </h1>

                                }
                            })
                            :
                            courses.map(course => {
                                return (
                                    <ProductCard
                                        key={course.courseID}
                                        courseID={course.id}
                                        image={course.image}
                                        title={course.title}
                                        stars={course.stars}
                                        type={course.type}
                                        price={course.price}
                                        teacher={course.teacher}
                                        teacherImg={course.teacherImg}
                                        description={course.description}
                                    />)
                            })
                    }




                </div>

                <h2 className="m-4">Categorias principales</h2>
                <CategoriesSection />

                <Footer />
            </div>
        </>
    )
}


export default Home
