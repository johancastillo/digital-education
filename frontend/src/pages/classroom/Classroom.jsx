import { Link } from "react-router-dom"
import "./Classroom.css"
import video from './html.mp4'

const Classroom = () => {
    return (
        <div className="page">
            <div className="container">
                <div className="px-4">
                    <video src={video} width="100%" controls></video>
                </div>
            </div>

            <div className="container my-4">
                <div className="row">
                    <div className="col-md-7">
                        <div className="card p-4">
                            <h5 className="mb-2">
                                1.1 - ¿Qué es HTML?
                        </h5>

                            <Link to="/curso">
                                <span class="badge bg-danger">
                                    HTML Desde Cero
                            </span>
                            </Link>

                            <Link to="/teacher-profile">
                                <div className="mt-4 d-flex">
                                    <img width="50px" height="50px" style={{ borderRadius: '50%' }} src="https://edteam-media.s3.amazonaws.com/users/thumbnail/6cf925e2-0d21-4a3d-b12b-8c76612bd6a9.jpg" alt="" />

                                    <div className="mx-2">
                                        <h5 className="m-0">Fredy Vegas</h5>
                                        <span>@fredyvegas</span>
                                    </div>
                                </div>
                            </Link>

                        </div>

                        <div className="card p-4 mt-4 d-flex">
                            <div className="row">
                                <div className="col-1">
                                    <div className="">
                                        <img width="40px" style={{ borderRadius: '50%' }} height="40px" src="https://edteam-media.s3.amazonaws.com/users/thumbnail/36ee2910-a392-46f3-8303-937dc3055c91.jpg" alt="" />
                                    </div>
                                </div>

                                <div className="col-11">
                                    <div style={{ marginLeft: '10px' }}>
                                        <input className="form-control" style={{ width: '100%', height: '100%' }} type="text" placeholder="Johan, ¿Quieres publicar algo?" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="card p-4">
                            <h5 className="text-center text-uppercase">
                                Temario
                            </h5>

                            <div class="accordion my-4" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button d-flex flex-column" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <h5>1. Introducción a Node.js</h5>
                                            <p>
                                                Conoceremos qué es Node.js y aprenderemos a instalarlo en Windows y Linux, finalmente crearemos nuestro primer Hola Mundo con Node.js.
                                        </p>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <ul>
                                                <li>
                                                    <Link to="/cursos/html/1-1">
                                                        1.1 - ¿Qué es Node.js?
                                                </Link>
                                                </li>

                                                <li>
                                                    <Link>
                                                        1.2 - Instalción de Node.js en Windows
                                                </Link>
                                                </li>

                                                <li>1.3 - Instalción de Node.js en Linux</li>
                                                <li>1.4 - Hola mundo con Node.js</li>
                                                <li>1.5 - Acerca de NPM</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed d-flex flex-column" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <h5>2. Creación de tu primer servidor con Node.js</h5>
                                            <p>
                                                En este módulo, empezarás a crear tu primer servidor HTTP con Node.js desde cero, sin la utilización de frameworks.
                                        </p>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed d-flex flex-column" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <h5>3. Uso del Framework Express</h5>
                                            <p>
                                                Crearás un servidor utilizando el framework Express, también conocerás cómo trabajar con rutas, archivos estáticos, middlewares y motores de vistas.
                                        </p>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Classroom
