import "./Category.css"
import data from './data.json'
import { useState } from 'react'
import CourseCardVertical from "../../components/course-card-vertical/CourseCardVertical"
import Filter from "../../components/filter/Filter"

const Category = () => {
    const [courses, setCourses] = useState(data)

    return (
        <div className="category">
            {/* HEADER START */}
            <div className="header d-flex">
                <button type="button" className="btn btn-outline-danger">
                    Filtrar (0)
                </button>

                <select className="form-select" style={{width: '160px', marginLeft: '10px'}}>
                    <option selected value="1">Más populares</option>
                    <option value="2">Más recientes</option>
                    <option value="3">Mejor valorados</option>
                </select>

                <button type="button" className="btn btn-outline-danger" style={{ marginLeft: '10px' }}>
                    Borrar filtros
                </button>
            </div>
            {/* HEADER END */}

            {/* CONTAINER START */}
            <div className="container-fluid">
                <div className="row">
                    {/* FILTERS START */}
                    <div className="col-md-4">
                        <Filter />
                    </div>
                    {/* FILTERS END */}

                    {/* COURSES LIST START */}
                    <div className="col-md-8">
                        {
                            courses.map( course => {
                                return(
                                    <CourseCardVertical 
                                        image={course.image}
                                        title={course.title}
                                        stars={course.stars}
                                        type={course.type}
                                        teacher={course.teacher}
                                        teacherImg={course.teacherImg}
                                        courseID={course.id}
                                        price={course.price}
                                    />
                                )
                            })
                        }
                    </div>
                    {/* COURSES LIST END */}
                </div>
            </div>
            {/* CONTAINER END */}
        </div>
    )
}

export default Category
