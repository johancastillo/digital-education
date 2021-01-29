import bannerImg from './blog-banner.jpg'
import post1 from './seo.jpg'
import post2 from './javascript.png'
import post3 from './html.jpg'

import "./BlogHome.css"

const BlogHome = () => {
    return (
        <div className="blog-home">

            <div className="container-custom">
                <div>
                    <img src={bannerImg} alt="" width="100%" />
                </div>

                <div className="d-flex justify-content-center post-primary mt-4">
                    <div class="card mb-3" style={{ width: '70%' }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={post1} alt="..." width="100%" height="100%" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">
                                        ¿Qué es el SEO?
                                    </h5>

                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={{marginTop: '152px'}}>
                <div className="row">
                    <div className="col-md-6">
                        <img src={post1} alt="" width="100%" height="100%" />
                    </div>

                    <div className="col-md-6">
                        <img src={post2} alt="" width="100%" height="100%" />

                    </div>
                </div>
            </div>




        </div>
    )
}

export default BlogHome
