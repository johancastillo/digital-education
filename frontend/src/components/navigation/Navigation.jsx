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

                    <div>
                        <Link to="/">
                            <img className="mx-2" src={logo} alt="logo" />
                        </Link>

                        <button type="button" className="btn btn-info" style={{ marginLeft: '10px' }}>
                            Explorar
                        </button>

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
                            <Link to="/development">Categoría</Link>
                        </li>

                        <li>
                            <Link to="/student-profile">Estudiante perfil</Link>
                        </li>

                        <li>
                            <Link to="/blog">Nuestro blog</Link>
                        </li>

                        <li>
                            <Link to="/cursos">Cursos</Link>
                        </li>

                        <li>
                            <Link to="/blog/bloguers">Bloguers</Link>
                        </li>

                        <li>
                            <Link to="/admin/create-course">
                                Crear cursos
                            </Link>
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