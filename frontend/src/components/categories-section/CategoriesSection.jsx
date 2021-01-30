import CategoryCard from "../category-card/CategoryCard"
import "./CategoriesSection.css"
// Images
import category1 from './design.jpg'
import category2 from './development.jpg'
import category3 from './marketing.jpg'
import category4 from './it-and-software.jpg'
import category5 from './personal-development.jpg'
import category6 from './business.jpg'
import category7 from './photography.jpg'
import category8 from './music.jpg'


const CategoriesSection = () => {
    return (
        <div className="section">
            <div className="categories">
                
                <CategoryCard
                    categoryID="1"
                    name="Diseño"
                    image={category1}
                />

                <CategoryCard
                    categoryID="2"
                    name="Desarrollo"
                    image={category2}
                />

                <CategoryCard
                    categoryID="3"
                    name="Marketing"
                    image={category3}
                />

                <CategoryCard
                    categoryID="4"
                    name="Informática y Software"
                    image={category4}
                />

                <CategoryCard
                    categoryID="5"
                    name="Desarrollo Personal"
                    image={category5}
                />

                <CategoryCard
                    categoryID="6"
                    name="Negocios"
                    image={category6}
                />

                <CategoryCard
                    categoryID="7"
                    name="Fotografía"
                    image={category7}
                />

                <CategoryCard
                    categoryID="8"
                    name="Música"
                    image={category8}
                />
            </div>
        </div>
    )
}

export default CategoriesSection
