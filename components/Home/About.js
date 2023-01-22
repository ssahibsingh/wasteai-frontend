import React from "react";
import style from "@/styles/Home.module.css";
const About = () => {
  return (
    <>
      <div className={`${style.about}`} id="about">
        <div className="container">
          <h2 className="text-center display-5 fw-bold text-second">
            About
          </h2>
          <h5 className="text-pri text-center mb-4">Snap, Sort, Succeed with WasteAI.co!</h5>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 col-sm-12">
              <div className="about-content">
                <p className="text-center">
                  At WasteAI.co, we are committed to promoting sustainable waste
                  management practices through the use of cutting-edge
                  technology. Our team of experts have developed a deep learning
                  model that can accurately classify trash in any image into
                  different categories. By using our website, individuals and
                  organizations can easily sort their waste and ensure that it
                  is disposed of or recycled properly.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="my-5"></div> */}
        </div>
      </div>
    </>
  );
};

export default About;
