
const Works = () => {
    return (
        <div className="page">
            <h1 className="text-center">
                ¡Aquí puede estar la oportunidad de tus sueños,
                postula y trabaja en las carreras del futuro!
            </h1>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div class="card" style={{width: '100%'}}>
                            <img src="https://edteam-media.s3.amazonaws.com/community/original/5160f4f6-2d52-414c-8d1a-2bd7136e0ba0.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">
                                ¡Únete al equipo de EDteam como pasante de UX!
                                </h5>

                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">
                                    ¡Postulate!
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div class="card" style={{width: '100%'}}>
                            <img src="https://edteam-media.s3.amazonaws.com/community/original/d71aa5ff-4c2b-4fe0-a97a-52ab909d0e45.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">
                                ¡Únete al equipo de EDteam en el puesto de Backend! 💻
                                </h5>

                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">
                                    ¡Postulate!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works
