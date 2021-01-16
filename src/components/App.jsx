import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from '../pages/about/About'
import Category from '../pages/category/Category'
import Home from '../pages/home/Home'
import PageNotFound from '../pages/page-not-found/PageNotFond'
import SingleProduct from '../pages/single-product/SingleProduct'
import Admin from './../pages/admin/Admin'

import "bootstrap/dist/css/bootstrap.min.css"
import Navigation from './navigation/Navigation'

const App = () => {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/single-product" component={SingleProduct} />
        <Route exact path="/admin" component={Admin} />
        <Route component={PageNotFound}  />
      </Switch>

    </Router>
  )
}

export default App;
