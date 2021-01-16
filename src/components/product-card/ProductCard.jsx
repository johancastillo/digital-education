import "./ProductCard.css"

const ProductCard = ({ title, image }) => {
    return (
        <div class="card" style={{ width: '100%' }}>
            <img src={image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>

                <div className="d-flex justify-content-between">
                    <div className="box-icons">
                        <span className="stars icon-star-full"></span>
                        <span className="stars icon-star-full"></span>
                        <span className="stars icon-star-full"></span>
                        <span className="stars icon-star-half"></span>
                        <span className="stars icon-star-void"></span>
                    </div>

                    <div>
                        <span className="icon-bookmark-void" style={{fontSize: "28px"}}></span>
                    </div>
                </div>

                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary " style={{ marginRight: '10px' }}>
                    <span className="icon-cart"></span>
                </a>
                <a href="#" class="btn btn-primary">Comprar ahora</a>
            </div>
        </div>
    )
}

export default ProductCard
