import "./ProductCard.css"
import { Link } from 'react-router-dom'
import BtnPrice from "../btn-price/BtnPrice"

const starsValidator = {
    0: { 1: "icon-star-void", 2: "icon-star-void", 3: "icon-star-void", 4: "icon-star-void", 5: "icon-star-void" },
    0.5: { 1: "icon-star-half", 2: "icon-star-void", 3: "icon-star-void", 4: "icon-star-void", 5: "icon-star-void" },
    1: { 1: "icon-star-full", 2: "icon-star-void", 3: "icon-star-void", 4: "icon-star-void", 5: "icon-star-void" },
    1.5: { 1: "icon-star-full", 2: "icon-star-half", 3: "icon-star-void", 4: "icon-star-void", 5: "icon-star-void" },
    2: { 1: "icon-star-full", 2: "icon-star-full", 3: "icon-star-void", 4: "icon-star-void", 5: "icon-star-void" },
    2.5: { 1: "icon-star-full", 2: "icon-star-full", 3: "icon-star-half", 4: "icon-star-void", 5: "icon-star-void" },
    3: { 1: "icon-star-full", 2: "icon-star-full", 3: "icon-star-full", 4: "icon-star-void", 5: "icon-star-void" },
    3.5: { 1: "icon-star-full", 2: "icon-star-full", 3: "icon-star-full", 4: "icon-star-half", 5: "icon-star-void" },
    4: { 1: "icon-star-full", 2: "icon-star-full", 3: "icon-star-full", 4: "icon-star-full", 5: "icon-star-void" },
    4.5: { 1: "icon-star-full", 2: "icon-star-full", 3: "icon-star-full", 4: "icon-star-full", 5: "icon-star-half" },
    5: { 1: "icon-star-full", 2: "icon-star-full", 3: "icon-star-full", 4: "icon-star-full", 5: "icon-star-full" }
}


const ProductCard = ({ courseID, title, image, stars, type, price, teacher, teacherImg, description }) => {

    const boxStars = starsValidator[stars]

    return (
        <div className="card" style={{ width: '100%' }} key={courseID}>
            <Link to="/cursos/html/1-1">
                <img src={image} className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>

                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        {/* Stars */}
                        <div className="box-icons">
                            <span className={`stars ${boxStars[1]}`}></span>
                            <span className={`stars ${boxStars[2]}`}></span>
                            <span className={`stars ${boxStars[3]}`}></span>
                            <span className={`stars ${boxStars[4]}`}></span>
                            <span className={`stars ${boxStars[5]}`}></span>
                        </div>

                        <span style={{ marginLeft: "10px" }}> {stars} </span>
                    </div>

                    <div>
                        <span className="icon-bookmark-void" style={{ fontSize: "22px" }}></span>
                    </div>
                </div>

                <div>
                    <span className="badge bg-danger"> {type} </span>
                </div>

                <p className="card-text pt-2">
                    {description}
                </p>

                <div className="card-footer px-0">
                    <div className="teacher">
                        <img className="teacher-img" src={teacherImg} alt="" />
                        <span style={{ marginLeft: '5px' }}>{teacher}</span>
                    </div>

                    <div className="price">

                        {
                            price === 'free' ? 
                            <span className="price" style={{color: 'red', marginLeft: '8px'}}>¡Gratis!</span> 
                            : 
                            <BtnPrice price={price} courseID={courseID} />
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductCard
