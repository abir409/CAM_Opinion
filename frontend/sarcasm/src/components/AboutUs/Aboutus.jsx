import React from 'react';
import './Aboutus.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import KarimBhai from '../../images/KarimBhai.jpeg';
import JalisBhai from '../../images/JalisBhai.jpeg';
import ZubaerBhai from '../../images/ZubaerBhai.jpeg';
import ShakilBhai from '../../images/ShakilBhai.jpeg';
import abir from '../../images/abir.jpeg';

const Aboutus = () => {
  return (
  <div className="aboutus">
      <h1>About Us</h1>
      <div className="row">
        <div className="col-md-12">
          <img src={KarimBhai} alt="Team Leader" className="img-fluid leader-img"/>
          <div className="person-info">
            <h3>John Doe</h3>
            <p>Team Leader<br/>Engineering Department</p>
          </div>
        </div>
      </div>
      <div className="developer-images">
        <div className="row">
          <div className="col-md-3">
            <img src={JalisBhai} alt="Developer 1" className="img-fluid developer-img"/>
            <div className="person-info">
              <h3>Jane Smith</h3>
              <p>Software Developer<br/>Engineering Department</p>
            </div>
          </div>
          <div className="col-md-3">
            <img src={ZubaerBhai} alt="Developer 2" className="img-fluid developer-img"/>
            <div className="person-info">
              <h3>Michael Johnson</h3>
              <p>Frontend Developer<br/>Design Department</p>
            </div>
          </div>
          <div className="col-md-3">
            <img src={ShakilBhai} alt="Developer 3" className="img-fluid developer-img"/>
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
