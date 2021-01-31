import { Link } from "react-router-dom"
import Stars from "../stars/Stars"
import venezuelaFlag from './venezuela.png'

const Flags = {
    "Venezuela": venezuelaFlag
}

const TeacherCard = ({ name, profesion, lastname, image, city, country, stars, category, description }) => {
    const flag = Flags[country]

    return (
        <div className="card" style={{ width: '100%' }}>
            <Link to="/teacher-profile">
                <img src={image} className="card-img-top" alt="..." />
            </Link>

            <div className="card-body">
                <Link to="/teacher-profile">
                    <h5 className="card-title text-center">{`${name} ${lastname}`}</h5>
                </Link>





                <div className="d-flex justify-content-center">
                    <div className="d-flex">
                        {/* Stars rendering component */}
                        <Stars stars={stars} />

                        <span style={{ marginLeft: "10px" }}> {stars} </span>
                    </div>
                </div>

                <Link to="/teachers">
                    <p className="text-center">
                        <span className="badge bg-warning text-dark">
                            {profesion ? profesion : ""}
                        </span>
                    </p>
                </Link>

                <p style={{ textAlign: 'justify' }} className="mt-2">
                    {description ? description : ""}
                </p>

                <Link to="country">
                    <div className="d-flex justify-content-center">
                        {
                            country ?
                            <img width="30px" height="20px" src={flag} alt="" />
                            :
                            ""
                        }
                        <p className="text-center mx-1">
                            {
                                country ? `${city}, ${country}` : ""
                            }
                        </p>
                    </div>
                </Link>

                <Link to="/development">
                    <div className="text-center">
                        <span className="badge bg-danger">
                            {category}
                        </span>
                    </div>
                </Link>





            </div>
        </div>
    )
}

export default TeacherCard