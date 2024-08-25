// DonateModal.js
import React from 'react';
import './DonateModal.css';

const DonateModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Donate</h2>
        <form>
          {/* Add your form fields here */}
          <div>
            <label>Name:</label>
            <input type="text" name="name" required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" required />
          </div>
          <div>
            <label>Amount:</label>
            <input type="number" name="amount" required />
          </div>
          {/* QR Code */}
          <div className="qr-code">
            <img src="/qr-upi.png" alt="QR Code" />
          </div>
          <button type="submit">Donate</button>
        </form>
      </div>
    </div>
  );
};

export default DonateModal;
