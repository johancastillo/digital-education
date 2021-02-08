import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ProductCard from "../../components/product-card/ProductCard"
import TeacherCard from "../../components/teacher-card/TeacherCard"

import celmira from './celmira.png'
import axios from "axios"

const Article = () => {
    const [article, setArticle] = useState({})

    // GET article
    useEffect(() => {
        axios.get("http://localhost:8080/articles/1")
        .then(
            response => setArticle(response.data)
        )
        .catch(
            err => console.log(err)
        )
    }, [])
    
    useEffect(() => {
        let contentEl = document.getElementById("content")
        contentEl.innerHTML = article.content
    }, [article])

    return (
        <div className="page">

            <div className="container card mt-4">
                <div className="row">
                    <div className="col-md-6">

                        <div className="card px-4 py-5 m-4">
                            <h5 className="">
                                {article.title}
                            </h5>

                            <p>
                                {article.description}
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img style={{ borderRadius: '8px' }} src={article.image} class="card-img-top" alt="..." />

                    </div>
                </div>
            </div>


            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">

                        <div className="card p-4 mb-4" id="content">
                            
                        </div>

                        <div className="mb-5 mt-2">
                            <h5 className="text-center text-uppercase">
                                Publicidad
                            </h5>

                            <img width="100%" className="" style={{ borderRadius: '8px' }} src="https://epinium.com/wp-content/uploads/2018/09/amazon-advertising.jpg" alt="" />
                        </div>


                    </div>

                    <div className="col-md-4">
                        <TeacherCard
                            image={celmira}
                            name="Celmira"
                            lastname="Rojas"
                            stars={3.5}
                            profesion="Copywriter"
                            country="Venezuela"
                            city="Caracas"
                            description="A través de la razón buscamos convencer. 
                            A través del sentimiento, buscamos conmover"

                        />

                        <br />
                        <br />

                        <h5 className="text-center text-uppercase">
                            Curso recomendado
                        </h5>

                        <ProductCard
                            key={6}
                            courseID={6}
                            image={'https://edteam-media.s3.amazonaws.com/courses/medium/81dee8dc-1dbf-4bbc-b415-70f43d102bc1.png'}
                            title={'Administración de servidores Linux'}
                            stars={2.5}
                            type={'Curso'}
                            price={15}
                            teacher={''}
                            teacherImg={'https://edteam-media.s3.amazonaws.com/users/thumbnail/f3d219b9-6756-48ca-8694-f5a339b4e0af.jpeg'}
                            description={'Administra servidores Linux desde la terminal, gestiona permisos, certificados y deploying de tus proyectos.'}
                        />

                        <br />
                        <br />
                        <br />

                        <h5 className="text-center text-uppercase">
                            Continúa leyendo
                        </h5>

                        <Link to="/">
                            <img width="100%" className="my-2" style={{ borderRadius: '8px' }} src="https://edteam-media.s3.amazonaws.com/blogs/original/1ef5c55b-3335-4bad-8abc-0a4945a720ec.png" alt="" />
                        </Link>

                        <Link to="/">
                            <img width="100%" className="my-2" style={{ borderRadius: '8px' }} src="https://edteam-media.s3.amazonaws.com/blogs/original/cab66205-99d2-4a98-8174-be1753c5303d.jpg" alt="" />
                        </Link>

                        <br />
                        <br />
                        <br />





                    </div>
                </div>
            </div>



        </div>
    )
}

export default Article
