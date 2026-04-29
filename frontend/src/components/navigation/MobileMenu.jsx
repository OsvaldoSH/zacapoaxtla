import { useNavigate } from "react-router-dom";
import { menuItems } from "./menuConfig.js";
import "./MobileMenu.css";

function MobileMenu() {
    const navigate = useNavigate();

    const items = menuItems.filter((item) => item.path != "/admin");

    return (
        <section className="mobile-menu">
            <h1 className="mobile-menu-title">Menu</h1>

            <div className="mobile-menu-grid">
                {items.map((item) => (
                    <button
                        key={item.path}
                        className="menu-card"
                        onClick={ () => navigate(item.path)}
                    >
                        <span className="menu-card-icon">{item.icon}</span>
                        <h3>{item.label}</h3>
                        <p>{item.descripcion}</p>
                    </button>
                ))}
            </div>
        </section>
    );
}

export default MobileMenu;
