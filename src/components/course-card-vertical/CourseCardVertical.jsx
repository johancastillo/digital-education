import BtnPrice from "../btn-price/BtnPrice"
import Stars from "../stars/Stars"

const CourseCardVertical = ({ image, title, stars, type, teacherImg, teacher, price, courseID }) => {
    return (
        <div className="card mb-3" style={{ width: '100%' }}>
            <div className="row g-0">

                <div className="col-md-6">
                    <img src={image} alt={title} style={{ width: '100%', height: '100%' }} />
                </div>

                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">
                            {title}
                        </h5>

                        <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                {/* Stars */}
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

                   <br/>

                        <div className="card-footer px-0">
                            <div className="teacher">
                                <img className="teacher-img" src={teacherImg} alt="" />
                                <span style={{ marginLeft: '5px' }}>{teacher}</span>
                            </div>

                            <div className="price">

                                {
                                    price === 'free' ?
                                        <span className="price" style={{ color: 'red', marginLeft: '8px' }}>¡Gratis!</span>
                                        :
                                        <BtnPrice price={price} courseID={courseID} />
                                }

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCardVertical