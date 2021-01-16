import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import About from '../pages/about/About';
import Category from '../pages/category/Category';
import Home from '../pages/home/Home';
import PageNotFound from '../pages/page-not-found/PageNotFond';
import SingleProduct from '../pages/single-product/SingleProduct';

import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>

        <li>
          <Link to="/about">Acerca de</Link>
        </li>

        <li>
          <Link to="/category">Categoría</Link>
        </li>

        <li>
          <Link to="/single-product">Producto</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/single-product" component={SingleProduct} />
        <Route component={PageNotFound}  />
      </Switch>

    </Router>
  )
}

export default App;
