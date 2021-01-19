import Banner from "../../components/banner/Banner"
import CategoriesSection from "../../components/categories-section/CategoriesSection"
import ProductCard from "../../components/product-card/ProductCard"
import "./Home.css"
// Data
import data from './data.json'

const courses = data

const Home = () => {
    return (
        <div className="home">
            <Banner />

            <div className="gallery">
                {
                    courses.map(course => {
                        return(
                        <ProductCard
                            courseID={course.id}
                            image={course.image}
                            title={course.title}
                            stars={course.stars}
                            type={course.type}
                            price={course.price}
                            teacher={course.teacher}
                            teacherImg={course.teacherImg}
                            description={course.description}
                        />)
                    })
                }




            </div>

            <CategoriesSection />
        </div>
    )
}

export default Home
