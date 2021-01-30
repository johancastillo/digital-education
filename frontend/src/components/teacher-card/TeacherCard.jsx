import { Link } from "react-router-dom"
import Stars from "../stars/Stars"

const TeacherCard = ({ name, profesion, lastname, image, country, stars, category, description }) => {
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

                <p className="card-text text-center mt-2">
                    {description ? description : ""}
                </p>

                <Link to="country">
                <p className="text-center">
                    {
                        country ? country : ""
                    }
                </p>
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