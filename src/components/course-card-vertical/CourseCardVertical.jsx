
const CourseCardVertical = ({image, title, description}) => {
    return (
        <div class="card mb-3" style={{width: '100%'}}>
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={image} alt="" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">
                            {title}
                        </h5>

                        <p class="card-text">
                            {description}    
                        </p>
                        
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCardVertical