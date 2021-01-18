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
                courseID="1"
                image="https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg"
                title="React desde cero"
                stars={4.5}
                type="Curso"
                price={20}
                teacher="Johan Castillo"
                teacherImg="https://scontent-lim1-1.cdninstagram.com/v/t51.2885-19/s150x150/41138827_478373809328665_5784876568920719360_n.jpg?_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=ApBaKpppVx0AX_-C2gF&tp=1&oh=efdfd7a1484b78234f4639e102c20ad2&oe=602C6874"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."
            />

            <ProductCard
                courseID="2"
                image="https://edteam-media.s3.amazonaws.com/courses/medium/bdf0b692-eef2-411b-8502-56d1d93fa85d.png"
                title="Scripting - Bash / Shell"
                stars={1}
                type="Taller"
                price={12}
                teacher="Johan Castillo"
                teacherImg="https://scontent-lim1-1.cdninstagram.com/v/t51.2885-19/s150x150/41138827_478373809328665_5784876568920719360_n.jpg?_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=ApBaKpppVx0AX_-C2gF&tp=1&oh=efdfd7a1484b78234f4639e102c20ad2&oe=602C6874"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."
            />

            <ProductCard
                courseID="3"
                image="https://edteam-media.s3.amazonaws.com/courses/medium/85d3d7e4-19db-4cff-a4cb-cbead813b6b5.png"
                title="Python desde cero"
                stars={3}
                type="E-Book"
                price={32}
                teacher="Johan Castillo"
                teacherImg="https://scontent-lim1-1.cdninstagram.com/v/t51.2885-19/s150x150/41138827_478373809328665_5784876568920719360_n.jpg?_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=ApBaKpppVx0AX_-C2gF&tp=1&oh=efdfd7a1484b78234f4639e102c20ad2&oe=602C6874"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."
            />

            <ProductCard
                courseID="4"
                image="https://edteam-media.s3.amazonaws.com/courses/medium/5ffc4c77-cbc3-476d-9c18-e180882a52c9.jpg"
                title="Linux desde cero"
                stars={1.5}
                type="Especialidad"
                price={58}
                teacher="Johan Castillo"
                teacherImg="https://scontent-lim1-1.cdninstagram.com/v/t51.2885-19/s150x150/41138827_478373809328665_5784876568920719360_n.jpg?_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=ApBaKpppVx0AX_-C2gF&tp=1&oh=efdfd7a1484b78234f4639e102c20ad2&oe=602C6874"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."
            />

            <ProductCard
                courseID="5"
                image="https://edteam-media.s3.amazonaws.com/courses/medium/7ddc32c0-79e8-4551-a89c-f9b0007a5e13.jpg"
                title="Gramatica avanzada del inglés"
                stars={3.5}
                type="Curso"
                price={23}
                teacher="Johan Castillo"
                teacherImg="https://scontent-lim1-1.cdninstagram.com/v/t51.2885-19/s150x150/41138827_478373809328665_5784876568920719360_n.jpg?_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=ApBaKpppVx0AX_-C2gF&tp=1&oh=efdfd7a1484b78234f4639e102c20ad2&oe=602C6874"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."
            />

            <ProductCard
                courseID="6"
                image="https://edteam-media.s3.amazonaws.com/courses/medium/47766c2e-6ef7-40a9-8c92-50939fe9bfd0.png"
                title="Electronica desde cero"
                stars={0.5}
                type="Curso"
                price={25}
                teacher="Johan Castillo"
                teacherImg="https://scontent-lim1-1.cdninstagram.com/v/t51.2885-19/s150x150/41138827_478373809328665_5784876568920719360_n.jpg?_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=ApBaKpppVx0AX_-C2gF&tp=1&oh=efdfd7a1484b78234f4639e102c20ad2&oe=602C6874"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."
            />

            <ProductCard
                courseID="7"
                image="https://edteam-media.s3.amazonaws.com/courses/medium/26557907-0555-427e-a40c-6ff207f98d72.png"
                title="HTML desde cero"
                stars="5"
                type="E-Book"
                price={30}
                teacher="Johan Castillo"
                teacherImg="https://scontent-lim1-1.cdninstagram.com/v/t51.2885-19/s150x150/41138827_478373809328665_5784876568920719360_n.jpg?_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=ApBaKpppVx0AX_-C2gF&tp=1&oh=efdfd7a1484b78234f4639e102c20ad2&oe=602C6874"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."
            />

            <ProductCard
                courseID="8"
                image="https://edteam-media.s3.amazonaws.com/courses/medium/244a7ff1-ab69-4a55-a227-cb02cdd6e33c.jpg"
                title="Bitcoin desde cero"
                stars={2.5}
                type="Especialidad"
                price={120}
                teacher="Johan Castillo"
                teacherImg="https://scontent-lim1-1.cdninstagram.com/v/t51.2885-19/s150x150/41138827_478373809328665_5784876568920719360_n.jpg?_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=ApBaKpppVx0AX_-C2gF&tp=1&oh=efdfd7a1484b78234f4639e102c20ad2&oe=602C6874"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."
            />

            <ProductCard
                courseID="9"
                image="https://edteam-media.s3.amazonaws.com/courses/medium/fbda9747-85b7-482e-8ffc-547b98031ca4.png"
                title="Introducción a las API REST (Gratis)"
                stars="1"
                type="Taller"
                price={12}
                teacher="Johan Castillo"
                teacherImg="https://scontent-lim1-1.cdninstagram.com/v/t51.2885-19/s150x150/41138827_478373809328665_5784876568920719360_n.jpg?_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=ApBaKpppVx0AX_-C2gF&tp=1&oh=efdfd7a1484b78234f4639e102c20ad2&oe=602C6874"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."
            />

            <ProductCard
                courseID="10"
                image="https://edteam-media.s3.amazonaws.com/courses/medium/e41bbf77-d458-48d9-814b-7dd62a214e40.png"
                title="Docker desde cero"
                stars={5}
                type="Curso"
                price={40}
                teacher="Johan Castillo"
                teacherImg="https://scontent-lim1-1.cdninstagram.com/v/t51.2885-19/s150x150/41138827_478373809328665_5784876568920719360_n.jpg?_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=ApBaKpppVx0AX_-C2gF&tp=1&oh=efdfd7a1484b78234f4639e102c20ad2&oe=602C6874"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
        </div>

        <CategoriesSection />
        </>
    )
}

export default Home
