import TeacherCard from './../../components/teacher-card/TeacherCard'
import teacher from './8.png'

const TeacherProfile = () => {
    return (
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <TeacherCard
                            name="Johan"
                            lastname="Castillo"
                            image={teacher}
                            stars={4}
                            profesion="Profesor"
                            category="Desarrollo de Software"
                            country="Venezuela"
                            city="Caracas"
                        />

                        <br />
                        <br />

                        <div className="card p-4 mb-5">

                            <div className="d-flex align-items-center" style={{cursor: 'pointer'}}>
                                <span className="icon icon-user-regular"></span>
                                <h6 className="m-0 mx-1">Perfil</h6>
                            </div>

                            <hr />

                            <div className="d-flex align-items-center" style={{cursor: 'pointer'}}>
                                <span className="icon icon-medal"></span>
                                <h6 className="m-0 mx-1">Certificados</h6>
                            </div>

                            <hr />

                            <div className="d-flex align-items-center" style={{cursor: 'pointer'}}>
                                <span className="icon icon-box"></span>
                                <h6 className="m-0 mx-1">Cursos dictados</h6>
                                <span class="badge bg-info text-dark mx-1">4</span>
                            </div>

                            <hr />



                            <div className="d-flex align-items-center" style={{cursor: 'pointer'}}>
                                <span className="icon icon-list-ul"></span>
                                <h6 className="m-0 mx-1">Posts</h6>
                                <span class="badge bg-info text-dark mx-1">2</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="card p-4">
                            <h5 className="text-center">
                                Perfil de: Johan Castillo
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherProfile
