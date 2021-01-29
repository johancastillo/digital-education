import "./Loading.css"

const Loading = ({loading}) => {
    return(
        <div className="loader-section" 
        style={loading ? {display: 'flex'} : {display: 'none'}}>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            <span className="text-center">
                Cargando...
            </span>
        </div>
    )
}

export default Loading
