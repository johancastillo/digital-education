import React from 'react'
import banner from './banner.webp'
import "./Banner.css"
import AppContext from '../../context/AppContext'

const Banner = () => {
    const {filter, setFilter, searching, setSearching} = React.useContext(AppContext)

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
            <img className="banner-img" src={banner} alt="" />

            <div className="box-container">
                <form className="form">
                    <h3>Transforma tus sueños y hazlo realidad</h3>

                    <p className="mt-4">
                        Mejora como profesional y adquiere los conocimientos que
                        necesitas para lograr tus metas.
                    </p>

                    <div class="mb-3">
                        <input type="text" onChange={handleSearch} placeholder="¿Qué quieres aprender?" className="form-control" />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Banner
