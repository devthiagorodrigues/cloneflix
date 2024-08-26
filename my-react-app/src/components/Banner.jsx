import "./banner.css"

const Banner = ({ Texto, Br, SubTexto }) => {
    return (
        <div className="container-texto">
            <h1 className="texto-banner">{Texto}</h1>
            <h1 className="texto-banner">{Br}</h1>
            <p className="subtexto-banner">{SubTexto}</p>
        </div>       
    )
}

export default Banner;