import TeacherCard from "../../components/teacher-card/TeacherCard"
import "./Teachers.css"

import banner from './images/banner.jpg'
import teacher1 from './images/1.png'
import teacher2 from './images/2.png'
import teacher3 from './images/3.png'
import teacher4 from './images/4.png'
import teacher5 from './images/5.png'
import teacher6 from './images/6.png'
import teacher7 from './images/7.png'
import teacher8 from './images/8.png'
import teacher9 from './images/9.png'
import teacher10 from './images/10.png'

const Teachers = () => {
    return (
        <div className="teachers">
            <img src={banner} width="100%" alt=""/>

            <h1 className="text-center mt-4">Profesores</h1>

            <div className="gallery">
                <TeacherCard
                    id={1}
                    image={teacher1}
                    name="Pablo"
                    lastname="Gonzales"
                    category="Matemáticas"
                    stars={4}
                    description="Profesor de la UCV"
                />

                <TeacherCard
                    id={2}
                    image={teacher2}
                    name="Miguel"
                    lastname="Azuaje"
                    category="Mercadeo y ventas"
                    stars={4}
                    description="Profesor de la Universidad Metropilitana"
                />

                <TeacherCard
                    id={3}
                    image={teacher3}
                    name="Luisa"
                    lastname="Cáceres"
                    category="Física"
                    stars={4}
                    description="Profesora de la Universidad Santa María"
                />

                <TeacherCard
                    id={4}
                    image={teacher4}
                    name="Robert"
                    lastname="Pérez"
                    category="Matemáticas"
                    stars={4}
                    description="Profesor de la UCV"
                />

                <TeacherCard
                    id={5}
                    image={teacher5}
                    name="Isabelle"
                    lastname="Campos"
                    category="Matemáticas"
                    stars={4}
                    description="Profesor de la UCV"
                />

                <TeacherCard
                    id={6}
                    image={teacher6}
                    name="Yorgelis"
                    lastname="Gómes"
                    category="Matemáticas"
                    stars={4}
                    description="Profesor de la UCV"
                />

                <TeacherCard
                    id={7}
                    image={teacher7}
                    name="Ángel"
                    lastname="Rodriguez"
                    category="Matemáticas"
                    stars={4}
                    description="Profesor de la UCV"
                />

                <TeacherCard
                    id={8}
                    image={teacher8}
                    name="Johan"
                    lastname="Castillo"
                    category="Matemáticas"
                    stars={4}
                    description="Profesor de la UCV"
                />

                <TeacherCard
                    id={9}
                    image={teacher9}
                    name="Miguel"
                    lastname="Castillo"
                    category="Matemáticas"
                    stars={4}
                    description="Profesor de la UCV"
                />

                <TeacherCard
                    id={10}
                    image={teacher10}
                    name="Gabriela"
                    lastname="Salas"
                    category="Matemáticas"
                    stars={4}
                    description="Profesor de la UCV"
                />
            </div>
        </div>
    )
}

export default Teachers
