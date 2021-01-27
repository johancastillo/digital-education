import {Link} from 'react-router-dom'

const CategoryCard = ({ name, image }) => {
    return (
        <Link to="/development">
            <div className="card" style={{ width: '100%' }}>
                <img src={image} className="card-img-top" alt={name} />

                <div className="card-body">
                    <h5 className="card-text">
                        {name}
                    </h5>
                </div>
            </div>
        </Link>
    )
}

export default CategoryCard
