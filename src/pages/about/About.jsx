import UserCard from "../../components/user-card/UserCard"
// Images Default
import male from './male.svg'
import famale from './famale.svg'
import jc from './jc.jpg'
// CSS
import './About.css'

const About = () => {
    return (
        <div className="about">  
            <h3 className="text-center">Aplicación desarrollada por:</h3>
            <div className="section team-dev">
                <UserCard
                    name="Johan Castillo"
                    role=""
                    image={jc}
                    role="Web Developer"
                />

                <UserCard
                    name="Euclides G."
                    image={male}
                    role="Web Developer"
                />

            </div>

            <h3 className="text-center">Equipo</h3>
            <div className="section team">
                <UserCard 
                    name="Celmira Rojas"
                    image={famale}
                    role="Copywriter"
                />
            </div>
        </div>
    )
}

export default About
