import TeacherCard from "../../components/teacher-card/TeacherCard"


const Article = () => {
    return (
        <div className="page">

            <div className="container card mt-4">
                <div className="row">
                    <div className="col-md-6">

                        <div className="card px-4 py-5 m-4">
                            <h5 className="">
                                WhatsApp, Telegram o Signal, ¿cuál prefieres?
                            </h5>

                            <p style={{ textAlign: 'justify' }}>
                                Luego de que WhatsApp anunció que cambiará sus condiciones de uso, el mundo entero comenzó a buscar alternativas, ¿dejarías de usar WhatsApp? ¿Quieres saber qué otras opciones tienes? ¡Descúbrelas en este blog! 🧐
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img style={{ borderRadius: '8px' }} src="https://edteam-media.s3.amazonaws.com/blogs/original/80dc0cbe-befc-44a6-9cd1-756ed60d3ee6.png" class="card-img-top" alt="..." />

                    </div>
                </div>
            </div>


            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card p-4 mb-4">
                            <p style={{ textAlign: 'justify' }}>
                                La semana pasada WhatsApp nos notificó que aplicará nuevas condiciones de uso a partir del próximo 8 de febrero. Si queremos seguir usando la app, debemos aceptarlas pero, ¿viste de qué se trata?, ¿o aceptaste sin pensarlo dos veces? Es normal que hayas respondido un "sí" a esta última pregunta. 😏 En este blog te mostraré las otras opciones de mensajería que están en la mira de todos: Telegram y Signal, y las compararemos con WhatsApp. De este modo, será más fácil para ti (o eso espero) escoger una nueva aplicación o al menos sabrás qué pierdes y qué ganas si te quedas en WhatsApp. ¡Comencemos! 🚀
                            </p>

                            <p style={{ textAlign: 'justify' }}>
                                Pero primero, <b>¿de qué tratan las nuevas condiciones de WhatsApp?</b>

                            </p>

                            <p style={{textAlign: 'justify'}}>
                                El 6 enero WhatsApp mostró una notificación en la que anunciaba que las condiciones de uso cambiarán a partir del 8 de febrero y comenzará a compartir datos con Facebook. ¿Qué datos? Básicamente todos los que recopila de forma automática de tu cuenta: tu número de teléfono, tu agenda de contactos y los datos que tienes en cada uno de ellos, datos de uso (cuánto tiempo estuviste conectado en la app, a qué hora), geolocalización e información que compartiste con terceros.
                            </p>

                            <p style={{textAlign: 'justify'}}>
                                Por si no lo sabías, WhatsApp recopila también información de tu dispositivo y su conexión. Toma las cookies para recordarte tus preferencias, el idioma que usas y ayudarte a seguir personalizando tus servicios. Toda esta información se recopila una vez instalas, accedes y usas el servicio. ¿Sabías todo esto?
                            </p>

                            <img height="200px" className="my-4" src="https://edteam-media.s3.amazonaws.com/blogs/original/61db737e-d2eb-4500-8f7d-ec2c79df0b34.jpg" alt=""/>                            

                            <p style={{textAlign: 'justify'}}>
                            Ahora bien, comparemos estas tres aplicaciones y veamos qué tiene que ofrecer cada una en cuanto a las principales características:
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <TeacherCard
                            name="Celmira"
                            lastname="Rojas"
                            stars={3.5}
                            profesion="Copywriter"

                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article
