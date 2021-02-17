import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './pages/about/About'
import Category from './pages/category/Category'
import Home from './pages/home/Home'
import PageNotFound from './pages/page-not-found/PageNotFound'
import Admin from './pages/admin/Admin'

import "bootstrap/dist/css/bootstrap.min.css"
import Navigation from './components/navigation/Navigation'
import Cart from './pages/cart/Cart'
import Favorites from './pages/favorites/Favorites'
import ToUp from './components/to-up/ToUp'
import CourseDetails from './pages/course-details/CourseDetails'
import BlogHome from './blog/blog-home/BlogHome'
import Teachers from './pages/teachers/Teachers'
import Works from './pages/works/Works'
import TeacherProfile from './pages/teacher-profile/TeacherProfile'
import Categories from './pages/categories/Categories'
import StudentProfile from './pages/student-profile/StudentProfile'
import CreateCourse from './pages/create-course/CreateCourse'
import Bloguers from './blog/blogers/Bloguers'
import Article from './blog/article/Article'
import Classroom from './pages/classroom/Classroom'
import CoursesList from './pages/courses-list/CoursesList'
import HomeTwo from './pages/home-two/HomeTwo'


const App = () => {

  return (
    
      <Router>
        <Navigation />
        <ToUp />

        <Switch>
          <Route exact path="/home" component={HomeTwo} />
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={BlogHome} />
          <Route exact path="/cursos" component={CoursesList} />
          <Route exact path="/teachers" component={Teachers} />
          <Route exact path="/teacher-profile" component={TeacherProfile} />
          <Route exact path="/categorias" component={Categories} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog/bloguers" component={Bloguers} />
          <Route exact path="/blog/article" component={Article} />
          <Route exact path="/trabajos" component={Works} />
          <Route exact path="/student-profile" component={StudentProfile} />
          <Route exact path="/development" component={Category} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin/create-course" component={CreateCourse} />
          <Route exact path="/cursos/html/1-1" component={Classroom} />
          <Route exact path="/curso" component={CourseDetails} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/favorites" component={Favorites} />

          <Route component={PageNotFound} />
        </Switch>

      </Router>
  )
}

export default App;
