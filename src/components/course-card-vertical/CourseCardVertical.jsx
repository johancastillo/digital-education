
const CourseCardVertical = ({image, title, description}) => {
    return (
        <div className="card mb-3" style={{width: '100%'}}>
            <div className="row g-0">
                
                <div className="col-md-6">
                    <img src={image} alt={title} style={{width: '100%'}} />
                </div>

                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">
                            {title}
                        </h5>

                        <p className="card-text">
                            {description}    
                        </p>
                        
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCardVertical