import { Link } from "react-router-dom"
import Stars from "../stars/Stars"

const TeacherCard = ({name, lastname, image, country, stars, category, description}) => {
    return(
        <div className="card" style={{ width: '100%' }}>
            <Link to="/teacher-profile">
                <img src={image} className="card-img-top" alt="..." />
            </Link>

            <div className="card-body">
                <Link to="/teacher-profile">
                    <h5 className="card-title">{`${name} ${lastname}`}</h5>
                </Link>

               

                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        {/* Stars rendering component */}
                        <Stars stars={stars} />

                        <span style={{ marginLeft: "10px" }}> {stars} </span>
                    </div>
                </div>

                <p className="card-text mt-2">
                    {description}
                </p>

                <p>
                    {
                        country ? country : ""
                    }
                </p>

                <div>
                    <span className="badge bg-danger"> {category} </span>
                </div>

                

                

            </div>
        </div>
    )
}

export default TeacherCard