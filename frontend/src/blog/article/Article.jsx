import { Link } from "react-router-dom"
import ProductCard from "../../components/product-card/ProductCard"
import TeacherCard from "../../components/teacher-card/TeacherCard"

import celmira from './celmira.png'

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

                            <p style={{ textAlign: 'justify' }}>
                                El 6 enero WhatsApp mostró una notificación en la que anunciaba que las condiciones de uso cambiarán a partir del 8 de febrero y comenzará a compartir datos con Facebook. ¿Qué datos? Básicamente todos los que recopila de forma automática de tu cuenta: tu número de teléfono, tu agenda de contactos y los datos que tienes en cada uno de ellos, datos de uso (cuánto tiempo estuviste conectado en la app, a qué hora), geolocalización e información que compartiste con terceros.
                            </p>

                            <p style={{ textAlign: 'justify' }}>
                                Por si no lo sabías, WhatsApp recopila también información de tu dispositivo y su conexión. Toma las cookies para recordarte tus preferencias, el idioma que usas y ayudarte a seguir personalizando tus servicios. Toda esta información se recopila una vez instalas, accedes y usas el servicio. ¿Sabías todo esto?
                            </p>

                            <img height="200px" className="my-4" src="https://edteam-media.s3.amazonaws.com/blogs/original/61db737e-d2eb-4500-8f7d-ec2c79df0b34.jpg" alt="" />

                            <p style={{ textAlign: 'justify' }}>
                                Ahora bien, comparemos estas tres aplicaciones y veamos qué tiene que ofrecer cada una en cuanto a las principales características:
                            </p>

                            <h4 className="mt-2">
                                Privacidad
                            </h4>

                            <p style={{ textAlign: 'justify' }}>
                                Este es el aspecto principal por el que muchos están dejando WhatsApp y están migrando a otras mensajerías. ¿Sabes qué datos toma cada una de ellas?
                            </p>

                            <p style={{ textAlign: 'justify' }}>
                                <b>WhatsApp</b> solicita 22 permisos para acceder a tu correo electrónico, tu número de teléfono, datos de publicidad, historial de compra, ubicación aproximada, experiencia de fallos, rendimiento y muchos más. 😴 Cada uno de estos datos se vincula a tu identidad. WhatsApp hace esto con el fin de evaluar tu experiencia en la plataforma. Sin embargo, no es favorable para ti como usuario, ya que cada vez habrá más información sobre ti en los servidores de Facebook.
                            </p>

                            <p style={{ textAlign: 'justify' }}>
                                <b>Telegram</b>, a diferencia de WhatsApp, solicita acceso a tu número de teléfono, a tu agenda de contactos, nombre de tu cuenta y ID de usuario. ¡Solo 4 datos! 😱
                            </p>

                            <p style={{ textAlign: 'justify' }}>
                                En este aspecto, <b>Signal</b> es el ganador indiscutible. Solo toma tu número de teléfono. 🤴
                            </p>

                            <h4 className="mt-2">
                                Cifrado
                            </h4>

                            <p style={{ textAlign: 'justify' }}>
                                <b>WhatsApp</b> cuenta con cifrado de extremo a extremo. Como aseguran en su web, los mensajes y llamadas están protegidos para que solo las personas con las que te comunicas los puedan leer o escuchar sin que nadie más, ni siquiera WhatsApp, lo pueda hacer. 🙈
                            </p>

                            <p style={{ textAlign: 'justify' }}>
                                <b>Telegram</b>, por su parte, admite dos capas de cifrado seguro. El cifrado <b>servidor-cliente</b>, que se utiliza en los chats en la nube (chats privados y grupales) y los chats secretos utilizan una capa adicional de cifrado <b>cliente-cliente</b>. Todos los datos, independientemente del tipo, se cifran de la misma manera, ya sea texto o archivos.
                            </p>

                            <p style={{ textAlign: 'justify' }}>
                                <b>Signal</b> cuenta con cifrado de extremo a extremo y está respaldado por su protocolo de código abierto. No pueden ver tus mensajes, ni escuchar tus llamadas, nunca. 🔒
                            </p>
                        </div>

                        <div className="mb-5 mt-2">
                            <h5 className="text-center text-uppercase">
                                Publicidad
                            </h5>

                            <img width="100%" className="" style={{ borderRadius: '8px' }} src="https://epinium.com/wp-content/uploads/2018/09/amazon-advertising.jpg" alt="" />
                        </div>


                    </div>

                    <div className="col-md-4">
                        <TeacherCard
                            image={celmira}
                            name="Celmira"
                            lastname="Rojas"
                            stars={3.5}
                            profesion="Copywriter"
                            category="Tendencias"
                            country="Venezuela"
                            city="Caracas"
                            description="A través de la razón buscamos convencer. 
                            A través del sentimiento, buscamos conmover"

                        />

                        <br />
                        <br />

                        <h5 className="text-center text-uppercase">
                            Curso recomendado
                        </h5>

                        <ProductCard
                            key={6}
                            courseID={6}
                            image={'https://edteam-media.s3.amazonaws.com/courses/medium/81dee8dc-1dbf-4bbc-b415-70f43d102bc1.png'}
                            title={'Administración de servidores Linux'}
                            stars={2.5}
                            type={'Curso'}
                            price={15}
                            teacher={''}
                            teacherImg={'https://edteam-media.s3.amazonaws.com/users/thumbnail/f3d219b9-6756-48ca-8694-f5a339b4e0af.jpeg'}
                            description={'Administra servidores Linux desde la terminal, gestiona permisos, certificados y deploying de tus proyectos.'}
                        />

                        <br />
                        <br />
                        <br />

                        <h5 className="text-center text-uppercase">
                            Continúa leyendo
                        </h5>

                        <Link to="/">
                            <img width="100%" className="my-2" style={{ borderRadius: '8px' }} src="https://edteam-media.s3.amazonaws.com/blogs/original/1ef5c55b-3335-4bad-8abc-0a4945a720ec.png" alt="" />
                        </Link>

                        <Link to="/">
                            <img width="100%" className="my-2" style={{ borderRadius: '8px' }} src="https://edteam-media.s3.amazonaws.com/blogs/original/cab66205-99d2-4a98-8174-be1753c5303d.jpg" alt="" />
                        </Link>

                        <br />
                        <br />
                        <br />





                    </div>
                </div>
            </div>



        </div>
    )
}

export default Article
