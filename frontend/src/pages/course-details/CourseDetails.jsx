import Stars from "../../components/stars/Stars"
import TeacherCard from "../../components/teacher-card/TeacherCard"

import teacher from './8.png'

const CourseDetails = () => {
    return (
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src="https://edteam-media.s3.amazonaws.com/courses/big/3cc48fa0-8327-4561-aa04-dafc3b799909.png"
                            alt=""
                            width="100%"
                            style={{ borderRadius: '5px' }}
                        />

                        <div className="d-flex mt-4">
                            <p style={{ marginRight: '10px' }}>Calificación: </p>
                            <Stars stars={3.5} />
                            <p style={{ marginLeft: '10px' }}>
                                {'3.5'}
                            </p>
                        </div>


                        <p className="">
                            Comparte en:
                        </p>
                    </div>

                    <div className="col-md-6">
                        <h1 className="text-center">
                            Node.js desde cero
                        </h1>
                        <p>
                            Aprende a crear aplicaciones con JavaScript en el lado del servidor.
                        </p>

                        <p>
                            <span style={{ marginRight: '10px', fontSize: '20px' }} className="icon-line-chart-down"></span>
                            Nivel: Básico
                        </p>

                        <p>
                            <span style={{ marginRight: '10px', fontSize: '20px' }} className="icon-calendar"></span>
                            Fecha de lanzamiento: 06 de Enero 2021
                        </p>

                        <p>
                        <span style={{marginRight: '10px', fontSize: '20px'}} className="icon-line-chart-down"></span>
                            <span style={{ marginRight: '10px', fontSize: '20px' }} className="icon-time"></span>
                            Duración: +8 horas (Ver temario)
                        </p>


                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 text-center">
                                    <button className="btn btn-primary my-2">
                                        <span className="icon-cart mx-1"></span>
                                        Cómpralo por $15
                                    </button>

                                </div>
                                <div className="col-md-6 text-center">
                                    <button className="btn btn-outline-primary my-2">
                                        <span className="icon-gift-void mx-1"></span>
                                        Regala este curso
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <p style={{ textAlign: 'justify' }}>
                            En este curso aprenderás a crear aplicaciones del lado del servidor, empezaremos conociendo un poco acerca de Node.js y su funcionamiento, luego utilizaremos el framework Express que nos facilitará la creación de APIs, veremos cómo realizar conexiones con bases de datos relacionales y no relacionales, aprenderemos cómo funcionan las autenticaciones con JWT y también cómo trabajar con sockets. Finalizaremos creando una aplicación web que nos permita dibujar y ver los cambios en tiempo real.
                        </p>

                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>¿Qué aprenderás?</h6>
                                    <ul>
                                        <li>Creación de aplicaciones usando Express</li>
                                        <li>Conexiones con bases de datos</li>
                                        <li>Autenticaciones con JWT</li>
                                        <li>Utilización de sockets</li>
                                    </ul>
                                </div>

                                <div className="col-md-6">
                                    <h6>¿Qué conocimientos previos necesitas?</h6>

                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>API REST</li>
                                    </ul>
                                </div>


                            </div>
                        </div>

                        <div class="alert alert-info" role="alert">
                            <h6>¿A quién está diriguido este curso?</h6>
                            <p>
                                Desarrolladores web con conocimientos básicos de funcionamiento de APIs
                            </p>
                        </div>

                        {/* Temario Start */}
                        <div className="my-4 d-flex justify-content-between align-items-center">
                            <h3>Temario del curso</h3>
                            <input style={{ width: '300px' }} placeholder="Busca dentro de este curso" type="text" className="form-control" />
                        </div>

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
                                            <li>1.1 - ¿Qué es Node.js?</li>
                                            <li>1.2 - Instalción de Node.js en Windows</li>
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
                        {/* Temario End */}

                    </div>

                    <div className="col-md-4 mb-4">
                        <TeacherCard
                            name="Johan"
                            lastname="Castillo"
                            image={teacher}
                            description="Desarrollador Web Full-Stack"
                            category="Desarrollo de Software"
                            stars={4}
                            profesion="Profesor"
                        />

                        <br />
                        <br />
                        <br />

                        <h5 className="text-center my-3 text-uppercase">Cursos relacionados</h5>

                        <img width="100%" style={{ borderRadius: '6px' }} className="my-3" src="https://edteam-media.s3.amazonaws.com/courses/medium/59fbcbab-90ee-4971-b804-a29ca9d5f484.png" alt="" />
                        <img width="100%" style={{ borderRadius: '6px' }} className="my-3" src="https://edteam-media.s3.amazonaws.com/courses/medium/251d0aae-bf84-4c02-b214-33384d9fdf36.png" alt="" />
                        <img width="100%" style={{ borderRadius: '6px' }} className="my-3" src="https://edteam-media.s3.amazonaws.com/courses/medium/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetails