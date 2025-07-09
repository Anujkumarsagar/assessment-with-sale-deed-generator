  //   - Create a form with 5 fields: Full Name, Father’s Name, Property Size, Sale Amount, Date.
  // - On submit, insert data into an HTML template with placeholders like {{name}}, {{sale_amount}}.
  // eg. This Sale Deed is made on {{date}} between {{name}}, S/o {{father_name}}, for a property of {{property_size}} sq.ft., sold for ₹{{sale_amount}}.

import React, { useState } from 'react';
import { template } from '../data/template';

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    propertySize: '',
    saleAmount: '',
    date: ''
  });

  const [generatedDeed, setGeneratedDeed] = useState('');
  const [showDeed, setShowDeed] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    //check karega koi field empty to nahi hai 
    return Object.values(formData).every((v) => v !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

 
    const filled = template
      .replace(/{{name}}/g, formData.fullName)
      .replace(/{{father_name}}/g, formData.fatherName)
      .replace(/{{property_size}}/g, formData.propertySize)
      .replace(/{{sale_amount}}/g, formData.saleAmount)
      .replace(/{{date}}/g, formData.date);

    setGeneratedDeed(filled);
    setShowDeed(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      fatherName: '',
      propertySize: '',
      saleAmount: '',
      date: ''
    });
    setGeneratedDeed('');
    setShowDeed(false);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title">Sale Deed Generator</h1>

        <div className="form">
          <div className="form-group">
            <label className="label">Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="input"
              placeholder="Enter full name"
            />
          </div>

          <div className="form-group">
            <label className="label">Father's Name:</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleInputChange}
              className="input"
              placeholder="Enter father's name"
            />
          </div>

          <div className="form-group">
            <label className="label">Property Size (sq.ft.):</label>
            <input
              type="number"
              name="propertySize"
              value={formData.propertySize}
              onChange={handleInputChange}
              className="input"
              placeholder="Enter property size"
            />
          </div>

          <div className="form-group">
            <label className="label">Sale Amount (₹):</label>
            <input
              type="number"
              name="saleAmount"
              value={formData.saleAmount}
              onChange={handleInputChange}
              className="input"
              placeholder="Enter sale amount"
            />
          </div>

          <div className="form-group">
            <label className="label">Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="input"
            />
          </div>

          <div className="button-group">
            <button
              className="submit-button"
              onClick={handleSubmit}
              disabled={!isFormValid()}
              style={{
                opacity: isFormValid() ? 1 : 0.5,
                cursor: isFormValid() ? 'pointer' : 'not-allowed'
              }}
            >
              Generate Sale Deed
            </button>
            <button onClick={handleReset} className="reset-button">
              Reset Form
            </button>
          </div>
        </div>
      </div>

      {showDeed && (
        <div className="deed-container">
          <div
            className="deed-document"
            //jsx component mei direct html inject karne ke liye
            dangerouslySetInnerHTML={{ __html: generatedDeed }}
          />
          <button onClick={() => window.print()} className="print-button">
            Print Deed
          </button>
        </div>
      )}
    </div>
  );
}

