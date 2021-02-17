import { useContext, useState } from 'react'
import "./Navigation.css"
import logo from './logo.svg'
import { Link } from 'react-router-dom'
import AppContext from '../../context/AppContext'


const Navigation = () => {
    const [menu, setMenu] = useState('menu-hidden')
    const { cartProducts, login } = useContext(AppContext)

    const closeMenu = () => setMenu('menu-hidden')
    const openMenu = () => setMenu('menu-active')


    return (
        <>
            <header className="navigation">

                <div className="box-logo">
                    <span className="icon-menu" style={{ cursor: 'pointer' }} onClick={openMenu}></span>

                    <Link to="/">
                        <a>
                            <img className="mx-2" src={logo} alt="logo" />
                        </a>
                    </Link>



                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            Explorar
                            </button>

                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <div className="conatiner d-flex">
                                <div className="col-6">
                                    <li><button class="dropdown-item" type="button">Matemáticas</button></li>
                                    <li><button class="dropdown-item" type="button">Desarrollo de Software</button></li>
                                    <li><button class="dropdown-item" type="button">Diseño</button></li>
                                    <li><button class="dropdown-item" type="button">Física</button></li>
                                </div>
                                <div className="col-6">
                                    <li><button class="dropdown-item" type="button">Matemáticas</button></li>
                                    <li><button class="dropdown-item" type="button">Desarrollo de Software</button></li>
                                    <li><button class="dropdown-item" type="button">Diseño</button></li>
                                    <li><button class="dropdown-item" type="button">Física</button></li>
                                </div>
                            </div>
                        </ul>

                    </div>
                </div>


                <div className="box-search">
                    <input type="text" className="form-control" placeholder="Buscar..." />
                </div>

                {
                    login ?
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
                        :
                        <div>
                            <Link to="/login">
                                <a>Iniciar sesión</a>
                            </Link>

                            <Link to="/register">
                                <button type="button" className="btn btn-info" style={{ marginLeft: '10px' }}>
                                    Únete de forma gratuita
                                </button>
                            </Link>
                        </div>
                }

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
                            <Link to="/categorias">Categorías</Link>
                        </li>

                        <li>
                            <Link to="/blog">Nuestro blog</Link>
                        </li>

                        <li>
                            <Link to="/cursos">Cursos</Link>
                        </li>

                        <li>
                            <Link to="/teachers">Profesores</Link>
                        </li>

                        <li>
                            <Link to="/trabajos">Trabajos</Link>
                        </li>


                    </ul>

                    <div>
                        <span className="icon icon-x" style={{ cursor: 'pointer' }} onClick={closeMenu}></span>
                    </div>
                </div>

                <div className="d-flex ">
                    <span className="icon icon-log-in"></span>
                    <p style={{ marginLeft: '10px' }}>
                        Cerrar sesión
                    </p>
                </div>
            </nav>
        </>
    )
}

export default Navigation