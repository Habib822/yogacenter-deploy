import React from "react";

function Contactusscreen() {
  return (
    <div className="contactus-box1">
      <div>
        <h4 className="Contacth4">CONTACT US</h4>
      </div>
      <div>
        <h5 className="Contacth5"> Reach out and say Hello ....</h5>
      </div>

      <div className="grid">
        <div className="contantus-box2">
          <div className="contantus-box3">
            <p className="contactTitle">Contact us by email:</p>
            <div className="contactInfo">
              <p>
                <i className="fas fa-envelope"></i> admin@gmail.com
              </p>
              <p>
                <i className="fas fa-envelope"></i> name@gmail.com
              </p>
            </div>
          </div>

          <div className="contantus-box4">
            {" "}
            <p className="contactTitle">Contact us by phone:</p>
            <div className="contactInfo">
              <p>
                <i className="fas fa-phone"></i> (+44)01612345678
              </p>
              <p>
                <i className="fas fa-phone"></i> (+44)01615432199
              </p>
            </div>
          </div>
          <div className="contantus-box5">
            {" "}
            <p className="contactTitle">Reach us on our social media:</p>
            <div className="contactInfo">
              <p>
                <i className="fab fa-facebook"></i> Facebook
              </p>
              <p>
                <i className="fab fa-twitter"></i> Twitter
              </p>
              <p>
                <i className="fab fa-instagram"></i> Instagram
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Contactusscreen;
