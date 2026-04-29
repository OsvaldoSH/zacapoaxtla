import MobileMenu from "../../../components/navigation/MobileMenu.jsx"

function Dashboard() {
    return (
        <>
            <div className="mobile-only">
                <MobileMenu />
            </div>

            <div className="desktop-only">
                <h1>Dashboard</h1>
                <p>Bienvenido al panel de administracion</p>
            </div>
        </>
    );
}

export default Dashboard;