import React, { useState } from 'react'
import Banner from "../../components/banner/Banner"
import CategoriesSection from "../../components/categories-section/CategoriesSection"
import ProductCard from "../../components/product-card/ProductCard"
import "./Home.css"
// Data
import data from '../../data.json'
import AppContext from '../../context/AppContext'


const Home = () => {
    const [courses] = useState(data)

    const { filter, searching} = React.useContext(AppContext)

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
