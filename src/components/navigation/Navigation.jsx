import "./Navigation.css"
import logo from './logo.svg'

const Navigation = () => {
    return (
        <header className="navigation">
            <div className="box-logo">
                <span className="icon-menu"></span>
                <img src={logo} alt=""/>

                <span className="logo-text">Digital Education</span>
            </div>

            <div className="box-search">
                <input type="text" placeholder="Buscar..." />
            </div>

            <div className="box-icons">
                <span className="icon icon-search"></span>
                
                <span className="icon icon-bookmark-full"></span>
                

                <div className="cart">
                    <span className="number">3</span>
                    <span className="icon icon-cart"></span>
                </div>
            </div>
        </header>
    )
}

export default Navigation
