import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    text: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setMessage("Email sent successfully!");
        setFormData({ to: "", subject: "", text: "" });
      } else {
        setMessage(`Error: ${result.error}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="email-form-container">
        <h1>Email Sender Demo</h1>
        <form onSubmit={handleSubmit} className="email-form">
          <div className="form-group">
            <label htmlFor="to">To:</label>
            <input
              type="email"
              id="to"
              name="to"
              value={formData.to}
              onChange={handleChange}
              required
              placeholder="recipient@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Email subject"
            />
          </div>

          <div className="form-group">
            <label htmlFor="text">Message:</label>
            <textarea
              id="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              required
              placeholder="Your message here..."
              rows="6"
            />
          </div>

          <button type="submit" disabled={loading} className="send-button">
            {loading ? "Sending..." : "Send Email"}
          </button>
        </form>

        {message && (
          <div
            className={`message ${
              message.includes("Error") ? "error" : "success"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
