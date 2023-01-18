import React from "react";
import style from "@/styles/Home.module.css";
const About = () => {
  
  return (
    <>
      <div className={`${style.about} pt-5`} id="about">
        <div className="container mt-5">
          <h2 className="text-center display-5 fw-bold my-5 text-second">About</h2>
          <div className="row justify-content-center align-items-center my-5">
            <div className="col-md-6 col-sm-12">
              <div className="about-content">
                {/* <h3 className="text-center">
                  <span className="text-">Waste AI</span> is a waste management
                  system that uses AI to detect waste and classify it into
                  different categories.
                </h3> */}
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates aspernatur vero omnis veniam quod? Aut labore iste
                  nostrum eveniet, natus, culpa asperiores tempora beatae
                  dolorum vitae distinctio possimus minima optio?Lorem ipsum
                  dolor sit amet consectetur, adipisicing elit. Deserunt est,
                  provident asperiores quae earum maiores, quasi eaque
                  doloremque ullam suscipit iste facilis quam dignissimos
                  aspernatur cupiditate sequi architecto minima assumenda!
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
