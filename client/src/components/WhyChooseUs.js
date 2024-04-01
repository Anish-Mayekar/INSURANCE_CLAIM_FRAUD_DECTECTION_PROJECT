import React from 'react';
import '../styles/WhyChooseUsStyles.css'; // Import CSS file for styling
import imgpa6 from "../assets/h1.jpg"


// Parent component
const WhyChooseUs = () => {
    return (
        <div className="container1">
          <div className="image1">
            <img src={imgpa6} alt="nothing" />
          </div>
          <div className="content1">
            <h2>Heading</h2>
            <h4>
              This is a sample paragraph. You can replace this with your own content.
            </h4>
            <ul className="bullet-points">
              <li>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</li>
              <li>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself</li>
              <li>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself</li>
              <li>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself</li>
            </ul>
          </div>
        </div>
      );
};

export default WhyChooseUs;
