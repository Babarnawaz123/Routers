// src/pages/Settings.jsx
import React, { useState } from "react";
import "./Settings.css"; // Import external CSS

function Settings() {
  const [email, setEmail] = useState("nawazbabar398@gmail.com");
  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();
    alert("Settings saved successfully!");
  };

  return (
    <div className="settings-container">
      <h2 className="settings-title">Settings</h2>

      {/* Account Info */}
      <section className="settings-section">
        <h3>Account Information</h3>
        <form onSubmit={handleSave}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Save Account Info</button>
        </form>
      </section>

      {/* Security */}
      <section className="settings-section">
        <h3>Security</h3>
        <button>Enable Two-Factor Authentication</button>
      </section>

      {/* Notifications */}
      <section className="settings-section">
        <h3>Notifications</h3>
        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
          Enable Email Notifications
        </label>
      </section>
    </div>
  );
}

export default Settings;
