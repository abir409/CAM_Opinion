import React from 'react';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <div>
      <div className="container">
        {/* Head of Department Section */}
        <div className="profile" style={{ color: 'azure' }}>
          <img src="images/anonym.png" alt="Head of Department" width="400"/>
          <h3>Md. Momtajul Karim</h3>
          <h4>Head of Capital Market</h4>
          <div className="speech-bubble">
            <p>We Are Anonymous. We Are Legion. We Do Not Forgive. We Do Not Forget. Expect Us.</p>
          </div>
        </div>
        
        {/* Team Members Section */}
        <div className="row team" style={{ textAlign: 'center' }}>
          <div className="col-md-3">
            <div className="card">
              <img src="images/anonym.png" className="card-img-top" alt="Member 1" width="100"/>
              <div className="card-body">
                <h8 className="card-title">Jalis Mahmud Tarif</h8>
                <p className="card-text">Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="images/anonym.png" className="card-img-top" alt="Member 2" width="100"/>
              <div className="card-body">
                <h8 className="card-title">Md. Zubaer Ahmed</h8>
                <p className="card-text">Jr. Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="images/anonym.png" className="card-img-top" alt="Member 3" width="100"/>
              <div className="card-body">
                <h8 className="card-title">Md. Mahbubul Alam Abir</h8>
                <p className="card-text">Jr. Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="images/anonym.png" className="card-img-top" alt="Member 4" width="100"/>
              <div className="card-body">
                <h8 className="card-title">Abdus Shakil Chowdhury</h8>
                <p className="card-text">Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus;
