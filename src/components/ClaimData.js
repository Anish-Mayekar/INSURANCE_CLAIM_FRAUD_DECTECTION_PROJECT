import React, { useState } from 'react';
import "../styles/ClaimDataStyles.css"

function ClaimData() {
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
    field6: '',
    field7: '',
    field8: '',
    field9: '',
    field10: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit form data here (e.g., send to a server)
    console.log(formData);
  };

  return (
    <div>
        <br></br><br></br><br></br>
        <h2>Submit your Claim for insurance Here!!</h2>
        <form onSubmit={handleSubmit} className="registration-form">
      <div className="form-columns">
        <div className="column">
          <input
            type="text"
            name="field1"
            value={formData.field1}
            onChange={handleChange}
            placeholder="Enter field 1"
          />
          <input
            type="text"
            name="field2"
            value={formData.field2}
            onChange={handleChange}
            placeholder="Enter field 2"
          />
          <input
            type="text"
            name="field3"
            value={formData.field3}
            onChange={handleChange}
            placeholder="Enter field 3"
          />
          <input
            type="text"
            name="field4"
            value={formData.field4}
            onChange={handleChange}
            placeholder="Enter field 4"
          />
          <input
            type="text"
            name="field5"
            value={formData.field5}
            onChange={handleChange}
            placeholder="Enter field 5"
          />
        </div>
        <div className="column">
          <input
            type="text"
            name="field6"
            value={formData.field6}
            onChange={handleChange}
            placeholder="Enter field 6"
          />
          <input
            type="text"
            name="field7"
            value={formData.field7}
            onChange={handleChange}
            placeholder="Enter field 7"
          />
          <input
            type="text"
            name="field8"
            value={formData.field8}
            onChange={handleChange}
            placeholder="Enter field 8"
          />
          <input
            type="text"
            name="field9"
            value={formData.field9}
            onChange={handleChange}
            placeholder="Enter field 9"
          />
          <input
            type="text"
            name="field10"
            value={formData.field10}
            onChange={handleChange}
            placeholder="Enter field 10"
          />
        </div>
      </div>
        <br></br>
      <button type="Submit">Submit</button>
    </form>
    </div>
    
  );
}

export default ClaimData;
