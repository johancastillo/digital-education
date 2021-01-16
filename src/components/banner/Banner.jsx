import banner from './banner.jpg'
import "./Banner.css"

const Banner = () => {
    return (
        <div className="banner">
            <img src={banner} alt="" width="100%" />
            
            <form className="form">
                <h2>Sueña a lo grande</h2>
                
                <p>
                    Ambición aceptada. Aprende las últimas habilidades para 
                    alcanzar tus objetivos profesionales.
                </p>

                <div class="mb-3">
                    <input type="email" placeholder="¿Qué quieres aprender?" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

            </form>
        </div>
    )
}

export default Banner
