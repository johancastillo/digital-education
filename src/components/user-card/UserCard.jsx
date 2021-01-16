import './UserCard.css'

const UserCard = ({name, image, role}) => {
    return (
        <div class="card card-user" style={{width: '100%'}}>
            <img src={image} class="card-img-top p-4" alt="..." />

            <div class="card-body p-0 mb-4">
                <h6 class="card-text text-center text-uppercase">
                    {name}
                </h6>
                <p className="text-center">
                    {role}
                </p>
            </div>
        </div>
    )
}

export default UserCard
