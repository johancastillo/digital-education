import Banner from "../../components/banner/Banner"
import CategoriesSection from "../../components/categories-section/CategoriesSection"
import ProductCard from "../../components/product-card/ProductCard"
import "./Home.css"

const Home = () => {
    return (
        <>
        <Banner />
        <div className="gallery">
            <ProductCard
                course="1"
                image="https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg"
                title="React desde cero"
            />

            <ProductCard
                course="2"
                image="https://edteam-media.s3.amazonaws.com/courses/medium/bdf0b692-eef2-411b-8502-56d1d93fa85d.png"
                title="Scripting - Bash / Shell"
            />

            <ProductCard
                course="3"
                image="https://edteam-media.s3.amazonaws.com/courses/medium/85d3d7e4-19db-4cff-a4cb-cbead813b6b5.png"
                title="Python desde cero"
            />

            <ProductCard
                course="4"
                image="https://edteam-media.s3.amazonaws.com/courses/medium/5ffc4c77-cbc3-476d-9c18-e180882a52c9.jpg"
                title="Linux desde cero"
            />

            <ProductCard
                course="5"
                image="https://edteam-media.s3.amazonaws.com/courses/medium/7ddc32c0-79e8-4551-a89c-f9b0007a5e13.jpg"
                title="Gramatica avanzada del inglés"
            />

            <ProductCard
                course="6"
                image="https://edteam-media.s3.amazonaws.com/courses/medium/47766c2e-6ef7-40a9-8c92-50939fe9bfd0.png"
                title="Electronica desde cero"
            />

            <ProductCard
                course="7"
                image="https://edteam-media.s3.amazonaws.com/courses/medium/26557907-0555-427e-a40c-6ff207f98d72.png"
                title="HTML desde cero"
            />

            <ProductCard
                course="8"
                image="https://edteam-media.s3.amazonaws.com/courses/medium/244a7ff1-ab69-4a55-a227-cb02cdd6e33c.jpg"
                title="Bitcoin desde cero"
            />

            <ProductCard
                course="9"
                image="https://edteam-media.s3.amazonaws.com/courses/medium/fbda9747-85b7-482e-8ffc-547b98031ca4.png"
                title="Introducción a las API REST (Gratis)"
            />

            <ProductCard
                course="10"
                image="https://edteam-media.s3.amazonaws.com/courses/medium/e41bbf77-d458-48d9-814b-7dd62a214e40.png"
                title="Docker desde cero"
            />
        </div>

        <CategoriesSection />
        </>
    )
}

export default Home
