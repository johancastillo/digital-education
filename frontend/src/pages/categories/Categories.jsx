
import CategoriesSection from '../../components/categories-section/CategoriesSection'
import data from './categories.json'

const Categories = () => {
    return(
        <div className="page">

            <CategoriesSection data={data} />
        </div>
    )
}

export default Categories
