import "./Navigation.css"
import logo from './logo.svg'

const Navigation = () => {
    return (
        <header className="navigation">
            <div className="box-logo">
                <img src={logo} alt=""/>
            </div>

            <div className="box-search">
                <input type="text" />
            </div>

            <div className="box-icons">
                <div>
                    <span className="icon icon-bookmark-full"></span>
                </div>
                
                <div>
                    <span className="icon icon-user"></span>
                </div>
                
                <div className="cart">
                    <span className="number">3</span>
                    <span className="icon icon-cart"></span>
                </div>
            </div>
        </header>
    )
}

export default Navigation
