
const CategoryCard = ({name, image}) => {
    return (
        <div class="card" style={{width: '100%'}}>
            <img src={image} class="card-img-top" alt={name} />
            
            <div class="card-body">
                <h5 class="card-text">
                    {name}
                </h5>
            </div>
        </div>
    )
}

export default CategoryCard
