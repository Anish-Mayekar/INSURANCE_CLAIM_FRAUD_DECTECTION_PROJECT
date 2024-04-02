import React from "react";
import "../styles/ClaimDataStyles.css";

function ClaimData () {
  const imageUrl = 'https://previews.123rf.com/images/arrow/arrow1505/arrow150500022/40383202-insurance-background.jpg'; // Replace with your image path

    return (
      <>
      <div style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="claimcontainer" >
          <h1>Car Insurance Claim Form</h1>
          <p>You had your car incident? We will help you with your claim.</p>
          <form>
            <div className="date-of-accident">
              <h3>Date of Accident:</h3>
              <div className="grid-container">
                <div className="div1">
                  <label htmlFor="textInput">Month: </label>
                  <input type="text" id="textInput" name="textInput" required />
                </div>
                <div className="div2">
                  <label htmlFor="textInput">Week of Month: </label>
                  <input type="text" id="textInput" name="textInput" required />
                </div>
                <div className="div3">
                  <label htmlFor="textInput">Day of Week: </label>
                  <input type="text" id="textInput" name="textInput" required />
                </div>
              </div>
            </div>

            <div className="accident-area">
              <h3>Accident Area:</h3>
              <div className="grid-container">
              <div className="div4">
                <label htmlFor="textInput">Accident Area: </label>
                <input type="text" id="textInput" name="textInput" required />
              </div>
              </div>
            </div>



            <div className="date-of-claim">
              <h3>Date of Claim:</h3>
              <div className="grid-container">
              <div className="div5">
                <label htmlFor="textInput">Month Claimed: </label>
                <input type="text" id="textInput" name="textInput" required />
              </div>
              <div className="div6">
                <label htmlFor="textInput">Week of Month Claimed: </label>
                <input type="text" id="textInput" name="textInput" required />
              </div>
              <div className="div7">
                <label htmlFor="textInput">Day of Week Claimed: </label>
                <input type="text" id="textInput" name="textInput" required />
              </div>
              </div> 
            </div>

            <div className="personal-information">
              <h3>Personal Information:</h3>
              <div className="grid-container">
              <div className="div8">
                <label htmlFor="textInput">Sex: </label>
                <input type="text" id="textInput" name="textInput" required />
              </div>
              <div className="div9">
                <label htmlFor="textInput">Marital Status: </label>
                <input type="text" id="textInput" name="textInput" required />
              </div>
              <div className="div10">
                <label htmlFor="textInput">Age: </label>
                <input type="text" id="textInput" name="textInput" required />
              </div>
              </div>
            </div>

            <div className="claim-details">
              <h3>Claim Details:</h3>
              <div className="grid-container">
              <div className="div11">
                <label htmlFor="textInput">Fault: </label>
                <input type="text" id="textInput" name="textInput" required />
              </div>
              <div className="div12">
                <label htmlFor="textInput">Policy Type: </label>
                <input type="text" id="textInput" name="textInput" required />
              </div>
              <div className="div13">
                <label htmlFor="textInput">Vehicle Category: </label>
                <input type="text" id="textInput" name="textInput" required />
              </div>
              <div className="div14">
                <label htmlFor="textInput">Vehicle Price: </label>
                <input type="text" id="textInput" name="textInput" required />
              </div>
              <div className="div15">
                <label htmlFor="textInput">Deductible: </label>
                <input type="text" id="textInput" name="textInput" required />
              </div>
              <div className="div16">
                <label htmlFor="textInput">Past Number of Claims: </label>
                <input type="text" id="textInput" name="textInput" required />
              </div>
              <div className="div17">
                <label htmlFor="textInput">Age of Vehicle: </label>
                <input type="text" id="textInput" name="textInput" required />
              </div>
              <div className="div18">
                <label htmlFor="textInput">Police Report Filed: </label>
                <input type="text" id="textInput" name="textInput" required />
              </div>
              <div className="div19">
                <label htmlFor="textInput">Witness Present: </label>
                <input type="text" id="textInput" name="textInput" required />
              </div>
              <div className="div20">
                <label htmlFor="textInput">Number of Supplements: </label>
                <input type="text" id="textInput" name="textInput" required />
              </div>
              <div className="div21">
                <label htmlFor="textInput">Address Change Claim: </label>
                <input type="text" id="textInput" name="textInput" required />
              </div>
              <div className="div22">
                <label htmlFor="textInput">Base Policy: </label>
                <input type="text" id="textInput" name="textInput" required />
              </div>
              </div>     
            </div>
          </form>
        </div>
        <div class="form-group">
          <button type="submit">Submit</button>
        </div>
      </div>
        
      </>
    );
  }


export default ClaimData;
