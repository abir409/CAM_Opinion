import React from 'react';
import './Aboutus.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Karim from '../../images/Karim.jpeg';
import Jalis from '../../images/Jalis.jpeg';
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
          <img src={Karim} alt="Team Leader" className="leader-img"/>
          <div className="person-info">
            <h3>Md. Momtajul Karim</h3>
            <p>Chief Advisor<br/>Tech Lead</p>
          </div>
        </div>
      </div>
      <div className="developer-images">
            <div className="row justify-content-center">
                <div className="col-md-3 text-center">
                    <img src={Jalis} alt="Developer 1" className="developer-img"/>
                    <div className="person-info">
                        <h3>Jalis Mahamud Tarif</h3>
                        <p>Desarrollador backend</p>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <img src={rony} alt="Developer 1" className="developer-img"/>
                    <div className="person-info">
                        <h3>Rashed Khan Rony</h3>
                        <p>Consultor Senior</p>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <img src={Zubaer} alt="Developer 2" className="developer-img"/>
                    <div className="person-info">
                        <h3>Zubaer Ahmed</h3>
                        <p>Desarrollador frontend</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-3 text-center">
                    <img src={Shakil} alt="Developer 3" className="developer-img"/>
                    <div className="person-info">
                        <h3>Sarah Williams</h3>
                        <p>Desarrollador backend</p>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <img src={abir} alt="Developer 4" className="developer-img"/>
                    <div className="person-info">
                        <h3>Md Mahabubul Alam Abir</h3>
                        <p>Desarrollador de pila completa</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
 
  );
}

export default Aboutus;
