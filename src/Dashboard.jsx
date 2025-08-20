import "./Dasboard.css";
import { Link, Outlet } from "react-router-dom";
function Dashboard() {
  return (
    <div>
      <h1 style={{ color: "#000000ff", textAlign: "center" }}>Dashboard</h1>
      {/* Navigation for nested routes */}
      <div className="Nav-Container">
        <nav>
          <Link to="profile" className="nav-link">
            Profile
          </Link>
          <Link to="settings" className="nav-link">
            Settings
          </Link>
        </nav>
      </div>
      {/* Outlet = Where nested components will render */}
      <Outlet />
    </div>
  );
}

export default Dashboard;
