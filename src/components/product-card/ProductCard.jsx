import "./ProductCard.css"
import { Link } from 'react-router-dom'
import BtnPrice from "../btn-price/BtnPrice"
import Stars from "../stars/Stars"




const ProductCard = ({ courseID, title, image, stars, type, price, teacher, teacherImg, description }) => {
    return (
        <div className="card" style={{ width: '100%' }}>
            <Link to="/cursos/html/1-1">
                <img src={image} className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>

                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        {/* Stars rendering component */}
                        <Stars stars={stars} />

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
