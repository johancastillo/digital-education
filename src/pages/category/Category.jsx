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
            <div className="header">
                <button type="button" class="btn btn-outline-danger">
                    Filtrar (0)
                </button>

                <button type="button" class="btn btn-outline-danger" style={{ marginLeft: '10px' }}>
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
                        <CourseCardVertical />
                    </div>
                    {/* COURSES LIST END */}
                </div>
            </div>
            {/* CONTAINER END */}
        </div>
    )
}

export default Category
