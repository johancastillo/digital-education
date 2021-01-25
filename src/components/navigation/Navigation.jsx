import { useContext, useState } from 'react'
import "./Navigation.css"
import logo from './logo.svg'
import { Link } from 'react-router-dom'
import AppContext from '../../context/AppContext'


const Navigation = () => {
    const [menu, setMenu] = useState('menu-hidden')
    const {cartProducts} = useContext(AppContext)

    const closeMenu = () => setMenu('menu-hidden')
    const openMenu = () => setMenu('menu-active')


    return (
        <>
            <header className="navigation">

                <div className="box-logo">
                    <span className="icon-menu" style={{cursor: 'pointer'}} onClick={openMenu}></span>

                    <Link to="/">
                        <img src={logo} alt="logo" />

                        <span className="logo-text">
                            Digital Education
                    </span>
                    </Link>
                </div>


                <div className="box-search" style={{ display: 'none' }}>
                    <input type="text" placeholder="Buscar..." />
                </div>

                <div className="box-icons">

                    <span className="icon icon-search"></span>

                    <Link to="/favorites">
                        <span className="icon icon-bookmark-void"></span>
                    </Link>

                    <div className="cart">
                        <Link to="/cart">
                            <span className="number">
                                {cartProducts.length}
                            </span>
                            <span className="icon icon-cart"></span>
                        </Link>
                    </div>

                </div>

            </header>

            <nav className={`menu ${menu}`} onClick={closeMenu}>
                <div className="d-flex justify-content-between">

                    <ul>
                        <li>
                            <Link to="/">
                                <span className="icon-home"></span>
                                <span>Inicio</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/about">¿Quienes somos?</Link>
                        </li>

                        <li>
                            <Link to="/category">Categoría</Link>
                        </li>

                        <li>
                            <Link to="/single-product">Producto</Link>
                        </li>
                    </ul>

                    <div>
                        <span className="icon icon-x" style={{cursor: 'pointer'}} onClick={closeMenu}></span>
                    </div>
                </div>

                <div className="d-flex ">
                    <span className="icon icon-log-in"></span>
                    <p style={{ marginLeft: '10px' }}>Cerrar sesión</p>
                </div>
            </nav>
        </>
    )
}

export default Navigation
