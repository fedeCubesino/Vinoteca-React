import logo from "../../assets/logo.jpeg"
import CartWidget from "../CartWidget/CartWidget"

function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="marca">
            <h1 data-text="SRAGLIA">SRAGLIA</h1>
        </div>
        <ul className="navbar-link">
            <li className="navbar-item"><a href="#">Inicio</a></li>
            <li className="navbar-item"><a href="#">Vinos</a></li>
            <li className="navbar-item"><a href="#">Contacto</a></li>
        </ul>
        <CartWidget/>
    </nav>
  )
}

export default Navbar
