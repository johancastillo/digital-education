import "./Loading.css"

const Loading = () => {
    return(
        <div className="loader-section">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            <span className="text-center">
                Cargando...
            </span>
        </div>
    )
}

export default Loading
