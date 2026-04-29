import { NavLink } from "react-router-dom";
import { menuItems } from "./menuConfig";
import "./Topbar.css";

function Topbar({ cerrarSesion }) {
    return (
        <header className="topbar">
            <div className="topbar-logo">Admin</div>

            <nav className="topbar-nav">
                {menuItems.map((item) => (
                    <NavLink 
                        key={item.path} 
                        to={item.path} 
                        className={({ isActive }) => isActive ? "topabr-link active" : "topbar-link"}
                    >
                        <span className="topbar-icon">{item.icon}</span>
                        {item.label}   
                    </NavLink>
                ))}
            </nav>

            <div className="topbar-user">
                <button className="topbar-button" onClick={cerrarSesion}>
                    Salir
                </button>
            </div>
        </header>
    );
}

export default Topbar;