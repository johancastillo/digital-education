import { useState } from "react"

import axios from 'axios'

const CreateCourse = () => {
    const [id, setId] = useState(100)
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [teacher, setTeacher] = useState('')
    const [teacherImg, setTeacherImg] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [date, setDate] = useState('')
    const [stars, setStars] = useState(0)


    // onChange Event
    const handleTitle = e => setTitle(e.target.value)
    const handleImage = e => setImage(e.target.value)
    const handlePrice = e => setPrice(e.target.value)
    const handleTeacher = e => setTeacher(e.target.value)
    const handleTeacherImg = e => setTeacherImg(e.target.value)
    const handleDescription = e => setDescription(e.target.value)
    const handleType = e => setType(e.target.value)
    const handleDate = e => setDate(e.target.value)
    const handleStars = e => setStars(e.target.value)

    const create = () => {
        const url = 'http://localhost:8080/courses'
        const data = { id, image, title, stars, type, price, teacher, teacherImg, description }

        axios.post(url, data)
            .then(
                response => console.log(response)

            )
            .catch(
                err => console.log(err)
            )
    }

    return (
        <div className="page">

            <div className="container mt-5 d-flex aling-items-center justify-content-center">
                <div className="card p-5">
                    <h3 className="text-center">
                        Create Course
                    </h3>

                    <form>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">

                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Título del curso</label>
                                        <input type="text" class="form-control" onChange={handleTitle} />
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Imágen</label>
                                        <input type="text" class="form-control" onChange={handleImage} />
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Estrellas</label>
                                        <input type="number" class="form-control" onChange={handleImage} />
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Tipo</label>
                                        <input type="text" class="form-control" onChange={handleImage} />
                                    </div>

                                </div>

                                <div className="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Precio</label>
                                        <input type="number" class="form-control" onChange={handlePrice} />
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Profesor</label>
                                        <input type="text" class="form-control" onChange={handleTeacher} />
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Profesor Img</label>
                                        <input type="text" class="form-control" onChange={handleTeacherImg} />
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Descripción</label>
                                        <input type="text" class="form-control" onChange={handleDescription} />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <button class="btn btn-primary" onClick={create}>
                            Crear
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateCourse
