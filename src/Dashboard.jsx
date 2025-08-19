import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Navigation for nested routes */}
      <nav>
        <Link to="profile">Profile</Link> | <Link to="settings">Settings</Link>
      </nav>

      {/* Outlet = Where nested components will render */}
      <Outlet />
    </div>
  );
}

export default Dashboard;
