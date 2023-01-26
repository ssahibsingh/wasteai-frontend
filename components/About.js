import React from "react";
import style from "@/styles/About.module.css";
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      {/* <div className="about-page page"> */}
      <div className="container">
        <h1 className="text-second text-center display-4 fw-bold">About</h1>
        <div className="row justify-content-center py-4">
          <div className="col-md-6 col-sm-8 col-12">
            <p className="text-center">
              At WasteAI.co, we are committed to promoting sustainable waste management practices through the use of cutting-edge technology. Our team of experts have developed a deep learning model that can accurately classify trash in any image into different categories. By using our website, individuals and organizations can easily sort their waste and ensure that it is disposed of or recycled properly.
            </p>
          </div>
        </div>

        {/* <div className="row">
          <h4 className="text-center text-second">How It Works</h4>
        
        </div> */}
        <div className="row justify-content-center">
          <h4 className="text-center text-second">Our Team</h4>
          <div className="col-md-3 col-sm-6 col-12">
            <div className="team-card text-center p-3">
              <Image src="/assets/rajgupta3.svg" alt="" width={200} height={200} className={`img-fluid m-2 ${style.teamImage}`} priority/>
              <h5>Raj Gupta</h5>
              <p>ML Engineer</p>
              <ul className="list-unstyled d-flex gap-3 justify-content-center">
                <li><a href="https://www.linkedin.com/in/raj-gupta-510534118" className="text-second" target="_blank" rel="noreferrer"><FiLinkedin /></a></li>
                <li><a href="https://github.com/RAJGUPTA28" className="text-second" target="_blank" rel="noreferrer"><FiGithub /></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <div className="team-card text-center p-3">
              <Image src="/assets/kanavphull.svg" alt="" width={200} height={200} className={`img-fluid m-2 ${style.teamImage}`} priority/>
              <h5>Kanav Phull</h5>
              <p>ML Engineer</p>
              <ul className="list-unstyled d-flex gap-3 justify-content-center">
                <li><a href="https://linkedin.com/in/kanavphull" className="text-second" target="_blank" rel="noreferrer"><FiLinkedin /></a></li>
                <li><a href="https://github.com/kanavphull" className="text-second" target="_blank" rel="noreferrer"><FiGithub /></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <div className="team-card text-center p-3">
              <Image src="/assets/sahibsingh.svg" alt="" width={200} height={200} className={`img-fluid m-2 ${style.teamImage}`} priority/>
              <h5>Sahib Singh</h5>
              <p>Web Developer</p>
              <ul className="list-unstyled d-flex gap-3 justify-content-center">
                <li><a href="https://linkedin.com/in/ssahibsingh" className="text-second" target="_blank" rel="noreferrer"><FiLinkedin /></a></li>
                <li><a href="https://github.com/ssahibsingh" className="text-second" target="_blank" rel="noreferrer"><FiGithub /></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <div className="team-card text-center p-3">
              <Image src="/assets/arunjaswal3.svg" alt="" width={200} height={200} className={`img-fluid m-2 ${style.teamImage}`} priority/>
              <h5>Arun Jaswal</h5>
              <p>App Developer</p>
              <ul className="list-unstyled d-flex gap-3 justify-content-center">
                <li><a href="https://linkedin.com/in/arunjaswal" className="text-second" target="_blank" rel="noreferrer"><FiLinkedin /></a></li>
                <li><a href="https://github.com/arunjaswal2002" className="text-second" target="_blank" rel="noreferrer"><FiGithub /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default AboutPage;
