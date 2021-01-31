
import CategoriesSection from '../../components/categories-section/CategoriesSection'
import CategoryCard from '../../components/category-card/CategoryCard'
import data from './categories.json'


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
                                    image={category.image }
                                    courses={category.courses}
                                    specialties={category.specialties}
                                    ebooks={category.ebooks}
                                    posts={category.posts}
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
