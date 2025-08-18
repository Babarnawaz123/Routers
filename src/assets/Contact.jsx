import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, we received your message!`);
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Us</h1>
      <p>
        Have any questions? We'd love to hear from you. Fill out the form below
        or reach us directly.
      </p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: "10px" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: "10px" }}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ padding: "10px", height: "100px" }}
        ></textarea>

        <button
          type="submit"
          style={{
            padding: "10px",
            background: "#282c34",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div style={{ marginTop: "30px" }}>
        <h2>📞 Get in Touch</h2>
        <p>
          📍 Address: Office No.1, 1st Floor, Plaza 44-C, Block A, Civic Center,
          Phase 4 Bahria Town, Islamabad
        </p>
        <p>📧 Email: support@ideofuzion.com</p>
        <p>📱 Phone: 0515411473</p>
      </div>
    </div>
  );
}
