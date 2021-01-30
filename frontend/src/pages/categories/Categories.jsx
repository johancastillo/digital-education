
import CategoriesSection from '../../components/categories-section/CategoriesSection'
import CategoryCard from '../../components/category-card/CategoryCard'
import data from './categories.json'

// Categories images
import category1 from './design.jpg'
import category2 from './design.jpg'
import category3 from './design.jpg'
import category4 from './design.jpg'
import category5 from './design.jpg'
import category6 from './design.jpg'
import category7 from './design.jpg'
import category8 from './design.jpg'
import category9 from './design.jpg'
import category10 from './design.jpg'
import category11 from './design.jpg'
import category12 from './design.jpg'
import category13 from './design.jpg'
import category14 from './design.jpg'
import category15 from './design.jpg'
import category16 from './design.jpg'
import category17 from './design.jpg'
import category18 from './design.jpg'
import category19 from './design.jpg'
import category20 from './design.jpg'
import category21 from './design.jpg'
import category22 from './design.jpg'
import category23 from './design.jpg'


const Categories = () => {
    let number = 0

    return (
        <div className="page">

            <div className="section">
                <div className="categories">

                    {
                        data.map(category => {
                            number++

                            return (
                                <CategoryCard
                                    categoryID={category.id}
                                    name={category.title}
                                    image={ category1 }
                                />
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Categories
