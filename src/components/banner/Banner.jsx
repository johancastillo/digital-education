import banner from './banner.jpg'
import "./Banner.css"

const Banner = () => {
    return (
        <div className="banner">
            <img className="banner-img" src={banner} alt=""  />
            
            <form className="form">
                <h3>Transforma tus sueños y hazlo realidad</h3>
                
                <p>
                    Mejora como profesional y adquiere los conocimientos que 
                    necesitas para lograr tus metas.
                </p>

                <div class="mb-3">
                    <input type="email" placeholder="¿Qué quieres aprender?" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

            </form>
        </div>
    )
}

export default Banner
