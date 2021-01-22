import {useContext, useState } from 'react'
import "./Navigation.css"
import logo from './logo.svg'
import { Link } from 'react-router-dom'
import AppContext from '../../context/AppContext'
import NavIcons from '../nav-icons/NavIcons'



const Navigation = ({cartNum}) => {
    const {cartProducts, menu, setMenu} = useContext(AppContext)

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

                <NavIcons 
                    cartNum={cartNum} 
                    menu={menu}
                />
            </header>

            <nav className={`menu ${menu}`}>
                <div>
                    <span className="icon icon-x" onClick={closeMenu}></span>
                </div>

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
