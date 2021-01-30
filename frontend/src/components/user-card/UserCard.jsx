import './UserCard.css'

const UserCard = ({name, image, role}) => {
    return (
        <div className="card card-user" style={{width: '100%'}}>
            <img src={image} className="card-img-top" alt="..." />

            <div className="card-body p-0 mb-4">
                <h6 className="card-text text-center mt-4 text-uppercase">
                    {name}
                </h6>

                <p className="text-center">
                    <span className="badge bg-danger">
                        {role}
                    </span>
                </p>
                
            </div>
        </div>
    )
}

export default UserCard
