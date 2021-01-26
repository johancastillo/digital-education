import "./ProductCard.css"
import { Link } from 'react-router-dom'
import BtnPrice from "../btn-price/BtnPrice"
import Stars from "../stars/Stars"
import { useContext, useState } from "react"
import AppContext from "../../context/AppContext"




const ProductCard = ({ courseID, title, image, stars, type, price, teacher, teacherImg, description }) => {
    const { favoritesList, setFavoritesList } = useContext(AppContext)
    const [favorite, setFavorite] = useState(favoritesList.includes(courseID))

    const addedFovorite = () => {
        const exists = favoritesList.includes(courseID)

        if (!exists) {
            setFavorite(!favorite)
            const newArray = favoritesList
            newArray.push(courseID)
            setFavoritesList(newArray)

            console.log(newArray)
        } else {
            setFavorite(!favorite)
            const newArray = favoritesList
            // Function for remove item of array
            const removeItemFromArr = (arr, item) => {
                var i = arr.indexOf(item);

                if (i !== -1) {
                    arr.splice(i, 1);
                }
            }

            removeItemFromArr(newArray, courseID)
            setFavoritesList(newArray)

            console.log(newArray)
        }


    }

    return (
        <div className="card" style={{ width: '100%' }}>
            <Link to="/curso">
                <img src={image} className="card-img-top" alt="..." />
            </Link>

            <div className="card-body">
                <Link to="/curso">
                    <h5 className="card-title">{title}</h5>
                </Link>

                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        {/* Stars rendering component */}
                        <Stars stars={stars} />

                        <span style={{ marginLeft: "10px" }}> {stars} </span>
                    </div>

                    <div>
                        <span className={favorite ? "icon-bookmark-full" : "icon-bookmark-void"}
                            style={{ fontSize: "22px", cursor: 'pointer' }}
                            onClick={addedFovorite}></span>
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
                        <img className="teacher-img" src={teacherImg} alt={teacher} />
                        <span className="d-none d-sm-block" style={{ marginLeft: '5px' }}>{teacher}</span>
                    </div>

                    <div className="price">

                        {
                            price === 'free' ?
                                <Link to="/curso"><span className="price" style={{ color: 'red', marginLeft: '8px' }}>¡Gratis!</span></Link>
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
