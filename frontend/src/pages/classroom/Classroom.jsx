import { Link } from "react-router-dom"
import "./Classroom.css"
import video from './html.mp4'

const Classroom = () => {
    return (
        <div className="page">
            <div className="px-4">
                <video src={video} width="100%" controls></video>
            </div>

            <div className="container my-4">
                <div className="row">
                    <div className="col-md-7">
                        <div className="card p-4">
                            <h5 className="mb-2">
                                1.1 - ¿Qué es HTML?
                        </h5>

                            <Link to="/curso">
                                <span class="badge bg-danger">
                                    HTML Desde Cero
                            </span>
                            </Link>

                            <Link to="/teacher-profile">
                                <div className="mt-4 d-flex">
                                    <img width="50px" height="50px" style={{ borderRadius: '50%' }} src="https://edteam-media.s3.amazonaws.com/users/thumbnail/6cf925e2-0d21-4a3d-b12b-8c76612bd6a9.jpg" alt="" />

                                    <div className="mx-2">
                                        <h5 className="m-0">Fredy Vegas</h5>
                                        <span>@fredyvegas</span>
                                    </div>
                                </div>
                            </Link>

                        </div>

                        <div className="card p-4 mt-4 d-flex">
                            <div className="row">
                                <div className="col-1">
                                    <div className="">
                                        <img width="40px" style={{ borderRadius: '50%' }} height="40px" src="https://edteam-media.s3.amazonaws.com/users/thumbnail/36ee2910-a392-46f3-8303-937dc3055c91.jpg" alt="" />
                                    </div>
                                </div>

                                <div className="col-11">
                                    <div style={{marginLeft: '10px'}}>
                                        <input style={{ width: '100%', height: '100%' }} type="text" placeholder="Johan, ¿Quieres publicar algo?" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="card p-4">
                            <h5 className="text-center text-uppercase">
                                Temario
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Classroom
