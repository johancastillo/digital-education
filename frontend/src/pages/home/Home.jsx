import React, { useState, useEffect } from 'react'
import Banner from "../../components/banner/Banner"
import CategoriesSection from "../../components/categories-section/CategoriesSection"
import ProductCard from "../../components/product-card/ProductCard"
import "./Home.css"
import AppContext from '../../context/AppContext'

//Axios
import axios from 'axios'
import Loading from '../../components/loading/Loading'


const Home = () => {
    // State of courses list
    const [courses, setCourses] = useState([])

    // State of filter courses for title
    const { filter, searching, loading, setLoading } = React.useContext(AppContext)

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
            <Loading loading={loading} />
            <div className="home">
                <Banner />

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

                <CategoriesSection />
            </div>
        </>
    )
}


export default Home
