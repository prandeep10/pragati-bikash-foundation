// SocialInternship.js
import React, { useState } from 'react';
import './SocialInternship.css';

const SocialInternship = () => {
  const [formPage, setFormPage] = useState(1);

  const handleNextPage = () => {
    setFormPage(formPage + 1);
  };

  const handlePrevPage = () => {
    setFormPage(formPage - 1);
  };

  return (
    <div className="social-internship">
      <h1>Social Internship 2024</h1>
      
      <div className="photo-grid">
        {/* Add your photos here */}
        <img src="https://cdn.downtoearth.org.in/library/large/2022-02-25/0.25794500_1645773147_istock-870402320.jpg" alt="Description 1" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJVONvRvsS2Zr6pYgE-LK4gh7Ti31uI90p5wBM553FuQ&s" alt="Description 2" />
        <img src="https://res.cloudinary.com/devex/image/fetch/c_scale,f_auto,q_auto,w_720/https://lh6.googleusercontent.com/3Qvbk1LUgWD_TXDtqkbYllHsoJKM_Im9QIPngz57_e9J_rxZHM7guiBkfHRfvMddtdof2gWQkHsKsqwtSnrRTIUsfx8JgHuK6RJu57i8_B2-hSmuzFxayXwJ1WQ1Xvugjg" alt="Description 3" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Dj1SQXP930_R5MVlVtgJd4HwMm5mdJv_W08xfwgBSw&s" alt="Description 4" />
      </div>

      <div className="form-container">
        {formPage === 1 && (
          <div className="form-page">
            <h2>Application Form - Page 1</h2>
            <form>
              <div>
                <label>Name:</label>
                <input type="text" name="name" required />
              </div>
              <div>
                <label>Email:</label>
                <input type="email" name="email" required />
              </div>
              <div>
                <label>Phone:</label>
                <input type="tel" name="phone" required />
              </div>
              <div>
                <label>Why do you want to join?</label>
                <textarea name="reason" required></textarea>
              </div>
              <button type="button" onClick={handleNextPage}>
                Next
              </button>
            </form>
          </div>
        )}
        {formPage === 2 && (
          <div className="form-page">
            <h2>Application Form - Page 2</h2>
            <form>
              {/* QR Code for payment */}
              <div className="qr-code">
                <img src="/qr-upi.png" alt="QR Code" />
              </div>
              <p>Please scan the QR code to pay the registration fee.</p>
              <button type="button" onClick={handlePrevPage}>
                Previous
              </button>
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialInternship;
