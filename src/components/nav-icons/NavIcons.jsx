import {Link} from 'react-router-dom'


const NavIcons = ({cartNum, menu}) => {
    return (
        <div className="box-icons">

            <span className="icon icon-search" style={menu === 'menu-hidden' ? { display: 'block' } : { display: 'none' }}></span>

            <Link to="/favorites">
                <span className="icon icon-bookmark-void" style={menu === 'menu-hidden' ? { display: 'block' } : { display: 'none' }}></span>
            </Link>

            <div className="cart">
                <Link to="/cart">
                    <span className="number">
                        {cartNum.length}
                    </span>
                    <span className="icon icon-cart"></span>
                </Link>
            </div>

        </div>
    )
}

export default NavIcons
