import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

const QueueForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !service.trim()) return;
    if (name && service) {
      onAdd({ name, service });
      setName("");
      setService("");
    }
  };
  return (
    <form action="" className="queue-form" onSubmit={handleSubmit}>
      <h2>Add to Queue</h2>
      <div className="form-group">
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Customer name"
        />
      </div>
      <div className="form-group">
        <select
          name="service"
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">Select the service</option>
          <option value="consultation">Consultation</option>
          <option value="payment">Payment</option>
          <option value="support">Support</option>
        </select>
      </div>
      <button type="submit">
        <FaUserPlus />
        Add Customer
      </button>
    </form>
  );
};

export default QueueForm;
