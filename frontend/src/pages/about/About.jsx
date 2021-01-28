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
            <h3 className="text-center">
                Team
            </h3>
            
            <div className="section team-grid">
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

                <UserCard
                    name="Celmira Rojas"
                    image={famale}
                    role="Copywriter"
                />

                <UserCard
                    name="Yoiberth Paredes"
                    image={male}
                    role="SEO Manager"
                />

                <UserCard
                    name="Yariana Ramos"
                    image={famale}
                    role="Diseñadora Gráfica"
                />

            </div>

        </div>
    )
}

export default About
