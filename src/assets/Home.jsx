import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {/* Hero Section */}
      <h1>🏠 Welcome to Our Website</h1>
      <p style={{ maxWidth: "600px", margin: "0 auto" }}>
        We are a creative team focused on delivering high-quality web solutions
        and services. Our goal is to help businesses grow online with modern,
        user-friendly, and scalable applications.
      </p>
      {/* Services Preview Section */}
      <div style={{ marginTop: "50px" }}>
        <h2>✨ What We Do</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              background: "#f9f9f9",
            }}
          >
            <h3>💻 Web Development</h3>
            <p>
              We build responsive and modern websites tailored to your business
              needs.
            </p>
          </div>

          {/* Card 2 */}
          <div
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              background: "#f9f9f9",
            }}
          >
            <h3>📱 App Development</h3>
            <p>
              Mobile apps that provide smooth user experiences across devices.
            </p>
          </div>

          {/* Card 3 */}
          <div
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              background: "#f9f9f9",
            }}
          >
            <h3>🎨 UI/UX Design</h3>
            <p>
              Clean, user-friendly, and creative designs to engage your
              customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
