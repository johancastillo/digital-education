import TeacherCard from './../../components/teacher-card/TeacherCard'
import teacher from './8.png'

const TeacherProfile = () => {
    return(
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
                            country="Caracas, Venezuela"
                        />
                    </div>

                    <div className="col-md-8">
                        <div className="card p-4">
                            <h5 className="text-center">
                                Perfil del profesor: Johan Castillo
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherProfile
