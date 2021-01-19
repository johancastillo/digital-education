import {useState} from 'react'
import banner from './banner.webp'
import "./Banner.css"

const Banner = () => {
    const [search, setSearch] = useState('')
    console.log(search)

    const handleChange = e => {
        setSearch(e.target.value)
    }

    return (
        <div className="banner">
            <img className="banner-img" src={banner} alt="" />

            <div className="box-container">
                <form className="form">
                    <h3>Transforma tus sueños y hazlo realidad</h3>

                    <p className="mt-4">
                        Mejora como profesional y adquiere los conocimientos que
                        necesitas para lograr tus metas.
                    </p>

                    <div class="mb-3">
                        <input type="text" onChange={handleChange} placeholder="¿Qué quieres aprender?" className="form-control" />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Banner
