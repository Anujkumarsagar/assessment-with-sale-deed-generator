export const template = `
<div class="sale-deed-document">
  <h2>SALE DEED</h2>
  <div class="deed-content">
    <p>This Sale Deed is made on <strong>{{date}}</strong> between <strong>{{name}}</strong>, S/o <strong>{{father_name}}</strong>, for a property of <strong>{{property_size}} sq.ft.</strong>, sold for <strong>₹{{sale_amount}}</strong>.</p>
    
    <div class="deed-details">
      <h3>PARTIES TO THE DEED:</h3>
      <p><strong>VENDOR:</strong> {{name}}, S/o {{father_name}}</p>
      
      <h3>PROPERTY DETAILS:</h3>
      <p><strong>Area:</strong> {{property_size}} sq.ft.</p>
      <p><strong>Sale Amount:</strong> ₹{{sale_amount}}</p>
      <p><strong>Date of Sale:</strong> {{date}}</p>
      
   
      
      <div class="signature-section">
        <div class="signature-box">
          <p>Vendor Signature</p>
          <p>{{name}}</p>
        </div>
        <div class="signature-box">
          <p>Purchaser Signature</p>
          <p>_________________</p>
        </div>
      </div>
      
      <div class="witness-section">
        <h4>WITNESSES:</h4>
        <div class="witness-box">
          <p>1. _________________</p>
          <p>2. _________________</p>
        </div>
      </div>
    </div>
  </div>
</div>
`;
