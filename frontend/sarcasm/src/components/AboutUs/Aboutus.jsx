import React from 'react';
import './Aboutus.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Karim from '../../images/Karim.jpeg';
// import JalisBhai from '../../images/JalisBhai.jpeg';
import Zubaer from '../../images/Zubaer.jpeg';
import Shakil from '../../images/Shakil.jpeg';
import abir from '../../images/abir.jpeg';
import rony from '../../images/Rony.jpg';

const Aboutus = () => {
  return (
  <div className="aboutus">
      <h1>About Us</h1>
      <div className="row">
        <div className="col-md-12">
          <img src={Karim} alt="Team Leader" className="img-fluid leader-img"/>
          <div className="person-info">
            <h3>Md. Momtajul Karim</h3>
            <p>Chef Advisor<br/>Tech Lead</p>
          </div>
        </div>
      </div>
      <div className="developer-images">
        <div className="row">
          <div className="col-md-3">
            <img src={""} alt="Developer 1" className="img-fluid developer-img"/>
            <div className="person-info">
              <h3>Jalis Mahamud Tarif</h3>
              <p>Backend Developer</p>
            </div>
          </div>
          <div className="col-md-3">
            <img src={rony} alt="Developer 1" className="img-fluid developer-img"/>
            <div className="person-info">
              <h3>Rashed Khan Rony</h3>
              <p>Senior Consultant </p>
            </div>
          </div>
          <div className="col-md-3">
            <img src={Zubaer} alt="Developer 2" className="img-fluid developer-img"/>
            <div className="person-info">
              <h3>Michael Johnson</h3>
              <p>Frontend Developer<br/>Design Department</p>
            </div>
          </div>
          <div className="col-md-3">
            <img src={Shakil} alt="Developer 3" className="img-fluid developer-img"/>
            <div className="person-info">
              <h3>Sarah Williams</h3>
              <p>Backend Developer<br/>Engineering Department</p>
            </div>
          </div>
          <div className="col-md-3">
            <img src={abir} alt="Developer 4" className="img-fluid developer-img"/>
            <div className="person-info">
              <h3>David Brown</h3>
              <p>Full Stack Developer<br/>Engineering Department</p>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  );
}

export default Aboutus;
