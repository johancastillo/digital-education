import React, { useState, useEffect } from 'react'
import Banner from "../../components/banner/Banner"
import CategoriesSection from "../../components/categories-section/CategoriesSection"
import ProductCard from "../../components/product-card/ProductCard"
import "./Home.css"
import AppContext from '../../context/AppContext'

//Axios
import axios from 'axios'


const Home = () => {
    const [courses, setCourses] = useState([])

    const { filter, searching} = React.useContext(AppContext)

    useEffect(() => {
        axios.get('https://johancastillo.github.io/json-api-fake/digital-education/courses.json')
        .then(
            response => setCourses(response.data)
        )
        .catch(
            error => console.log(error)
        )
    }, [])

    return (
        <div className="home">
            <Banner />

            <div className="gallery">
                {

                    filter ?
                        courses.map(course => {
                            const wordSearching = searching.toLowerCase()
                            const titleSearching = course.title.toLowerCase()
                            const validation = titleSearching.includes(wordSearching)

                            if(validation){
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
                            }else{
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
    )
}

export default Home
