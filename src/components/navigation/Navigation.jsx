import { useState } from 'react'
import "./Navigation.css"
import logo from './logo.svg'
import { Link } from 'react-router-dom'



const Navigation = () => {
    const [menu, setMenu] = useState('menu-hidden')
    const [cart, setCart] = useState([])

    const closeMenu = () => setMenu('menu-hidden')
    const openMenu = () => setMenu('menu-active')


    return (
        <>
            <header className="navigation">
                <div className="box-logo">
                    <span className="icon-menu" onClick={openMenu}></span>
                    <img src={logo} alt="logo" />

                    <span className="logo-text">Digital Education</span>
                </div>

                <div className="box-search" style={{ display: 'none' }}>
                    <input type="text" placeholder="Buscar..." />
                </div>

                <div className="box-icons">

                    <span className="icon icon-search" style={menu === 'menu-hidden' ? { display: 'block' } : { display: 'none' }}></span>

                    <Link to="/favorites">
                        <span className="icon icon-bookmark-void" style={menu === 'menu-hidden' ? { display: 'block' } : { display: 'none' }}></span>
                    </Link>

                    <div className="cart" style={menu === 'menu-hidden' ? { display: 'block' } : { display: 'none' }}>
                        <Link to="/cart">
                            <span className="number">
                                {cart.length}
                            </span>
                            <span className="icon icon-cart"></span>
                        </Link>
                    </div>

                    <span className="icon icon-x" onClick={closeMenu}
                        style={menu === 'menu-active' ? { display: 'block' } : { display: 'none' }}></span>
                </div>
            </header>

            <nav className={`menu ${menu}`}>
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

                <div className="d-flex ">
                    <span className="icon icon-log-in"></span>
                    <p style={{ marginLeft: '10px' }}>Cerrar sesión</p>
                </div>
            </nav>
        </>
    )
}

export default Navigation
