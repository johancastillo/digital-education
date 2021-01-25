import "./Favorites.css"
import Loading from './../../components/loading/Loading'
import { useContext, useEffect, useState } from "react"
import AppContext from "../../context/AppContext"
import ProductCard from './../../components/product-card/ProductCard'
import axios from 'axios'

const Favorites = () => {
    const { loading, setLoading, favoritesList } = useContext(AppContext)
    const [courses, setCourses] = useState([])

    useEffect(() => {
        axios.get('https://johancastillo.github.io/json-api-fake/digital-education/courses.json')
            .then(
                response => setCourses(response.data),
                setLoading(false)
            )
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <Loading loading={loading} />
            <div className="favorite-page">
                <h1 className="text-center">Lista de favoritos</h1>
                <p className="text-center">
                    {
                        favoritesList.length === 0 ?
                            "Su lista de favoritos está vacía"
                            :
                            "Ésta es su lista de favoritos"
                    }
                </p>

                <div className="grid-favorites">
                    {
                        courses.map(course => {
                            const validation = favoritesList.includes(course.id)

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
                            }
                        })
                    }


                </div>
            </div>
        </>
    )
}

export default Favorites