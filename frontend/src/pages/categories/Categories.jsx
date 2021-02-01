
import CategoryCard from '../../components/category-card/CategoryCard'
import data from './categories.json'


const Categories = () => {

    return (
        <div className="page">

            <div className="container">
                <div className="section">
                    <div className="categories">

                        {
                            data.map(category => {

                                return (
                                    <CategoryCard
                                        categoryID={category.id}
                                        name={category.title}
                                        image={category.image}
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
        </div>
    )
}

export default Categories
