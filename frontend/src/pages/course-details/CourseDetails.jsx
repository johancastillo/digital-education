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

                        <p className="mt-4">
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

                        <p>Nivel: Básico</p>
                        <p>Fecha de lanzamiento: 06 de Enero 2021</p>
                        <p>Duración: +8 horas (Ver temario)</p>

                        <button className="btn btn-primary">Cómpralo por $15 USD</button>
                        <button className="btn btn-outline-primary mx-4">Regala este curso</button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <p style={{ textAlign: 'justify' }}>
                            En este curso aprenderás a crear aplicaciones del lado del servidor, empezaremos conociendo un poco acerca de Node.js y su funcionamiento, luego utilizaremos el framework Express que nos facilitará la creación de APIs, veremos cómo realizar conexiones con bases de datos relacionales y no relacionales, aprenderemos cómo funcionan las autenticaciones con JWT y también cómo trabajar con sockets. Finalizaremos creando una aplicación web que nos permita dibujar y ver los cambios en tiempo real.
                        </p>
                    </div>

                    <div className="col-md-4">
                        <TeacherCard 
                            name="Johan"
                            lastname="Castillo"
                            image={teacher}
                            description="Desarrollador Web Full-Stack"
                            category="Desarrollo de Software"
                            stars={4}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetails