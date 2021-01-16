import React, {Component} from 'react'
import "./Navigation.css"
import logo from './logo.svg'
import {Link} from 'react-router-dom'



class Navigation extends Component{

    constructor(props){
        super(props)

        this.state = {
            menu: 'menu-hidden'
        }

        this.closeMenu = this.closeMenu.bind(this)
        this.openMenu = this.openMenu.bind(this)
    }

    closeMenu(){ 
        this.setState({menu: 'menu-hidden'})
    }

    openMenu(){
        this.setState({menu: 'menu-active'})
    }


    render(){
        return (
            <>
                <header className="navigation">
                    <div className="box-logo">
                        <span className="icon-menu" onClick={this.openMenu}></span>
                        <img src={logo} alt="" />
    
                        <span className="logo-text">Digital Education</span>
                    </div>
    
                    <div className="box-search">
                        <input type="text" placeholder="Buscar..." />
                    </div>
    
                    <div className="box-icons">
                        
                        <span className="icon icon-search" style={this.state.menu === 'menu-hidden' ? {display: 'block'} : {display: 'none'}}></span>
    
                        <span className="icon icon-bookmark-void" style={this.state.menu === 'menu-hidden' ? {display: 'block'} : {display: 'none'}}></span>
    
    
                        <div className="cart" style={this.state.menu === 'menu-hidden' ? {display: 'block'} : {display: 'none'}}>
                            <span className="number">3</span>
                            <span className="icon icon-cart"></span>
                        </div>
    
                        <span className="icon icon-x" onClick={this.closeMenu} 
                                style={ this.state.menu === 'menu-active' ? {display: 'block'} : {display: 'none'}}></span>
                    </div>
                </header>
    
                <nav className={`menu ${this.state.menu}`}>
                    <ul>
                        <li>
                            <Link to="/">Inicio</Link>
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
                </nav>
            </>
        )
    }
}

export default Navigation
