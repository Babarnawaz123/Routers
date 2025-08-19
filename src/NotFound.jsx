import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>404 - Not Found</h2>
      <div>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "blue", textAlign: "center" }}
        >
          Go to Home
        </Link>
      </div>
      <img
        src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/06/how-to-fix-error-404-1.png"
        alt="404 Not Found"
      />
    </div>
  );
}
export default NotFound;
