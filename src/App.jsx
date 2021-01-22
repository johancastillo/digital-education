import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './pages/about/About'
import Category from './pages/category/Category'
import Home from './pages/home/Home'
import PageNotFound from './pages/page-not-found/PageNotFound'
import SingleProduct from './pages/single-product/SingleProduct'
import Admin from './pages/admin/Admin'

import "bootstrap/dist/css/bootstrap.min.css"
import Navigation from './components/navigation/Navigation'
import Course from './pages/course/Course'
import Cart from './pages/cart/Cart'
import Favorites from './pages/favorites/Favorites'
import AppProvider from './context/AppProvider'


const App = () => {
  return (
    <AppProvider>
      <Router>
        <Navigation />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/development" component={Category} />
          <Route exact path="/single-product" component={SingleProduct} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/cursos/html/1-1" component={Course} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/favorites" component={Favorites} />

          <Route component={PageNotFound} />
        </Switch>

      </Router>
    </AppProvider>
  )
}

export default App;
