import React from 'react'
import "./Banner.css"
import AppContext from '../../context/AppContext'
// Banners Image
import banner from './banner.png'
import banner2 from './banner2.jpg'


const Banner = () => {
    const {setFilter, setSearching} = React.useContext(AppContext)

    const handleSearch = e => {
        if(e.target.value){
            setFilter(true)
        } else{
            setFilter(false)
        }

        setSearching(e.target.value)
    }

    return (
        <div className="banner">
            <img className="d-none d-md-block banner-desktop" src={banner2} alt="" />
            <img className="d-block d-md-none" src={banner} alt="" />

            <div className="box-container">
                <form className="form">
                    <h3>
                        ¡Adquiere los conocimientos que necesitas para lograr tus sueños!
                    </h3>

                    <p className="mt-4">
                        Aprende, fórmate y mejora como profesional con conocimientos en herramientas digitales gracias a las clases con el contenido más actualizado en distintas áreas.
                    </p>

                    <div className="mb-3">
                        <input type="text" onChange={handleSearch} placeholder="¿Qué quieres aprender?" className="form-control" />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Banner
