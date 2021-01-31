
import slider1 from './slider-lg-1.png'
import slider2 from './slider-lg-2.png'
import slider3 from './slider-lg-3.png'

import "./BlogHome.css"
import Post from '../post/Post'
import { Link } from 'react-router-dom'

const BlogHome = () => {
    return (
        <div className="page">

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        {/* Importatnt Post */}

                        <div class="card" style={{ width: '100%' }}>
                            <Link to="/blog/article">
                                <img src="https://edteam-media.s3.amazonaws.com/blogs/original/80dc0cbe-befc-44a6-9cd1-756ed60d3ee6.png" class="card-img-top" alt="..." />
                            </Link>
                            <div class="card-body">
                                <Link to="/blog/article">
                                    <h5 class="card-title">
                                        WhatsApp, Telegram o Signal, ¿cuál prefieres?
                                </h5>
                                </Link>

                                <span class="badge bg-danger">
                                    Post destacado
                                </span>

                                <p class="card-text mt-4">
                                    Luego de que WhatsApp anunció que cambiará sus condiciones de uso, el mundo entero comenzó a buscar alternativas, ¿dejarías de usar WhatsApp? ¿Quieres saber qué otras opciones tienes? ¡Descúbrelas en este blog! 🧐
                                </p>

                                <div className="mt-5 d-flex justify-content-between align-items-center">

                                    <div className="d-flex justify-content-cente align-items-center">
                                        <img width="40px" style={{ borderRadius: '50%' }} src="https://scontent-lim1-1.cdninstagram.com/v/t51.2885-19/s150x150/41138827_478373809328665_5784876568920719360_n.jpg?_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=ApBaKpppVx0AX_-C2gF&tp=1&oh=efdfd7a1484b78234f4639e102c20ad2&oe=602C6874" alt="" />
                                        <span className="mx-2">Johan Castillo</span>
                                    </div>

                                    <div>
                                        <span className="icon icon-calendar mx-1"></span>
                                        <span>21 ene. 2021</span>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>


                    <div className="col-md-6">
                        <h5 className="text-center text-uppercase">
                            Lo más leído
                        </h5>

                        {/* Vertical Post */}
                        <div class="card mb-3" style={{ width: '100%' }}>
                            <div class="row g-0">

                                <div class="col-md-5">
                                    <img width="100%" height="100%" src="https://edteam-media.s3.amazonaws.com/blogs/original/7ea0c8b7-4d95-4f17-888b-e827a9fb929f.png" alt="..." />
                                </div>

                                <div class="col-md-7">



                                    <div class="card-body">
                                        <h6 class="card-title">
                                            8 sitios web para descargar gráficos gratis (+bonus)
                                        </h6>

                                        <p class="card-text">

                                        </p>

                                        <div className="d-flex">

                                            <div className="d-flex justify-content-cente align-items-center">
                                                <img width="30px" style={{ borderRadius: '50%' }} src="https://scontent-lim1-1.cdninstagram.com/v/t51.2885-19/s150x150/41138827_478373809328665_5784876568920719360_n.jpg?_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=ApBaKpppVx0AX_-C2gF&tp=1&oh=efdfd7a1484b78234f4639e102c20ad2&oe=602C6874" alt="" />
                                                <span className="mx-2">Johan Castillo</span>
                                            </div>


                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>


                        {/* Vertical Post */}
                        <div class="card mb-3" style={{ width: '100%' }}>
                            <div class="row g-0">

                                <div class="col-md-5">
                                    <img width="100%" height="100%" src="https://edteam-media.s3.amazonaws.com/blogs/original/7ea0c8b7-4d95-4f17-888b-e827a9fb929f.png" alt="..." />
                                </div>

                                <div class="col-md-7">



                                    <div class="card-body">
                                        <h6 class="card-title">
                                            8 sitios web para descargar gráficos gratis (+bonus)
                                        </h6>

                                        <p class="card-text">

                                        </p>

                                        <div className="d-flex">

                                            <div className="d-flex justify-content-cente align-items-center">
                                                <img width="30px" style={{ borderRadius: '50%' }} src="https://scontent-lim1-1.cdninstagram.com/v/t51.2885-19/s150x150/41138827_478373809328665_5784876568920719360_n.jpg?_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=ApBaKpppVx0AX_-C2gF&tp=1&oh=efdfd7a1484b78234f4639e102c20ad2&oe=602C6874" alt="" />
                                                <span className="mx-2">Johan Castillo</span>
                                            </div>


                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>


                        {/* Vertical Post */}
                        <div class="card mb-3" style={{ width: '100%' }}>
                            <div class="row g-0">

                                <div class="col-md-5">
                                    <img width="100%" height="100%" src="https://edteam-media.s3.amazonaws.com/blogs/original/7ea0c8b7-4d95-4f17-888b-e827a9fb929f.png" alt="..." />
                                </div>

                                <div class="col-md-7">



                                    <div class="card-body">
                                        <h6 class="card-title">
                                            8 sitios web para descargar gráficos gratis (+bonus)
                                        </h6>

                                        <p class="card-text">

                                        </p>

                                        <div className="d-flex">

                                            <div className="d-flex justify-content-cente align-items-center">
                                                <img width="30px" style={{ borderRadius: '50%' }} src="https://scontent-lim1-1.cdninstagram.com/v/t51.2885-19/s150x150/41138827_478373809328665_5784876568920719360_n.jpg?_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=ApBaKpppVx0AX_-C2gF&tp=1&oh=efdfd7a1484b78234f4639e102c20ad2&oe=602C6874" alt="" />
                                                <span className="mx-2">Johan Castillo</span>
                                            </div>


                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>


                        {/* Vertical Post */}
                        <div class="card mb-3" style={{ width: '100%' }}>
                            <div class="row g-0">

                                <div class="col-md-5">
                                    <img width="100%" height="100%" src="https://edteam-media.s3.amazonaws.com/blogs/original/7ea0c8b7-4d95-4f17-888b-e827a9fb929f.png" alt="..." />
                                </div>

                                <div class="col-md-7">



                                    <div class="card-body">
                                        <h6 class="card-title">
                                            8 sitios web para descargar gráficos gratis (+bonus)
                                        </h6>

                                        <p class="card-text">

                                        </p>

                                        <div className="d-flex">

                                            <div className="d-flex justify-content-cente align-items-center">
                                                <img width="30px" style={{ borderRadius: '50%' }} src="https://scontent-lim1-1.cdninstagram.com/v/t51.2885-19/s150x150/41138827_478373809328665_5784876568920719360_n.jpg?_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=ApBaKpppVx0AX_-C2gF&tp=1&oh=efdfd7a1484b78234f4639e102c20ad2&oe=602C6874" alt="" />
                                                <span className="mx-2">Johan Castillo</span>
                                            </div>


                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>



                    </div>

                </div>
            </div>

            {/* Slider */}

            <div className="px-5">
                <img src={slider1} style={{ borderRadius: '8px' }} class="d-block w-100" alt="..." />
            </div>


            <h5 className="m-5 text-uppercase">
                Últimos posts
            </h5>

            <div className="gallery px-5">
                <Post
                    postID="1"
                    image="https://edteam-media.s3.amazonaws.com/blogs/original/428aeb7d-daa4-4629-a679-706895c6bdca.png"
                    title="Cursos más vistos en el 2020"
                    date="22 de ene. 2021"
                />

                <Post
                    postID="1"
                    image="https://edteam-media.s3.amazonaws.com/blogs/original/428aeb7d-daa4-4629-a679-706895c6bdca.png"
                    title="Cursos más vistos en el 2020"
                    date="22 de ene. 2021"
                />

                <Post
                    postID="1"
                    image="https://edteam-media.s3.amazonaws.com/blogs/original/428aeb7d-daa4-4629-a679-706895c6bdca.png"
                    title="Cursos más vistos en el 2020"
                    date="22 de ene. 2021"
                />

                <Post
                    postID="1"
                    image="https://edteam-media.s3.amazonaws.com/blogs/original/428aeb7d-daa4-4629-a679-706895c6bdca.png"
                    title="Cursos más vistos en el 2020"
                    date="22 de ene. 2021"
                />

                <Post
                    postID="1"
                    image="https://edteam-media.s3.amazonaws.com/blogs/original/428aeb7d-daa4-4629-a679-706895c6bdca.png"
                    title="Cursos más vistos en el 2020"
                    date="22 de ene. 2021"
                />

                <Post
                    postID="1"
                    image="https://edteam-media.s3.amazonaws.com/blogs/original/428aeb7d-daa4-4629-a679-706895c6bdca.png"
                    title="Cursos más vistos en el 2020"
                    date="22 de ene. 2021"
                />

                <Post
                    postID="1"
                    image="https://edteam-media.s3.amazonaws.com/blogs/original/428aeb7d-daa4-4629-a679-706895c6bdca.png"
                    title="Cursos más vistos en el 2020"
                    date="22 de ene. 2021"
                />

                <Post
                    postID="1"
                    image="https://edteam-media.s3.amazonaws.com/blogs/original/428aeb7d-daa4-4629-a679-706895c6bdca.png"
                    title="Cursos más vistos en el 2020"
                    date="22 de ene. 2021"
                />

                <Post
                    postID="1"
                    image="https://edteam-media.s3.amazonaws.com/blogs/original/428aeb7d-daa4-4629-a679-706895c6bdca.png"
                    title="Cursos más vistos en el 2020"
                    date="22 de ene. 2021"
                />
            </div>

        </div>
    )
}

export default BlogHome
