import "../components/navbar.css";

const Navbar = () => {
    return (
        <div className="container">
            <header>
                <div className="div-logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" width={150} />
                </div>

                <div className="div-entrar">
                    <button className="button-entrar">
                        Entrar
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Navbar;