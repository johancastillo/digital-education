import "./ProductCard.css"
import {Link} from 'react-router-dom'

const starsValidator = {
    0: {1: "icon-star-void", 2:"icon-star-void", 3:"icon-star-void", 4: "icon-star-void", 5: "icon-star-void"},
    0.5: {1: "icon-star-half", 2:"icon-star-void", 3:"icon-star-void", 4: "icon-star-void", 5: "icon-star-void"},
    1: {1: "icon-star-full", 2:"icon-star-void", 3:"icon-star-void", 4: "icon-star-void", 5: "icon-star-void"},
    1.5: {1: "icon-star-full", 2:"icon-star-half", 3:"icon-star-void", 4: "icon-star-void", 5: "icon-star-void"},
    2: {1: "icon-star-full", 2:"icon-star-full", 3:"icon-star-void", 4: "icon-star-void", 5: "icon-star-void"},
    2.5: {1: "icon-star-full", 2:"icon-star-full", 3:"icon-star-half", 4: "icon-star-void", 5: "icon-star-void"},
    3: {1: "icon-star-full", 2:"icon-star-full", 3:"icon-star-full", 4: "icon-star-void", 5: "icon-star-void"},
    3.5: {1: "icon-star-full", 2:"icon-star-full", 3:"icon-star-full", 4: "icon-star-half", 5: "icon-star-void"},
    4: {1: "icon-star-full", 2:"icon-star-full", 3:"icon-star-full", 4: "icon-star-full", 5: "icon-star-void"},
    4.5: {1: "icon-star-full", 2:"icon-star-full", 3:"icon-star-full", 4: "icon-star-full", 5: "icon-star-half"},
    5: {1: "icon-star-full", 2:"icon-star-full", 3:"icon-star-full", 4: "icon-star-full", 5: "icon-star-full"}
}


const ProductCard = ({ title, image, stars }) => {

    const boxStars = starsValidator[stars]

    return (
        <Link to="/cursos/html/1-1">
        <div class="card" style={{ width: '100%' }}>
            <img src={image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>

                <div className="d-flex justify-content-between">
                    {/* Stars */}
                    <div className="box-icons">
                        <span className={`stars ${boxStars[1]}`}></span>
                        <span className={`stars ${boxStars[2]}`}></span>
                        <span className={`stars ${boxStars[3]}`}></span>
                        <span className={`stars ${boxStars[4]}`}></span>
                        <span className={`stars ${boxStars[5]}`}></span>
                    </div>

                    <div>
                        <span className="icon-bookmark-void" style={{fontSize: "28px"}}></span>
                    </div>
                </div>

                <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>

                <a href="#" class="btn btn-primary " style={{ marginRight: '10px' }}>
                    <span className="icon-cart"></span>
                </a>
                <a href="#" class="btn btn-primary">Comprar ahora</a>
            </div>
        </div>
        </Link>
    )
}

export default ProductCard
