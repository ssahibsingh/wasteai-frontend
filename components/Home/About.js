import React from "react";
import style from "@/styles/Home.module.css";
const About = () => {
  let steps = [
    {
      id: 1,
      icon: "fa-regular fa-image",
      description:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
    },
    {
      id: 2,
      icon: "fa-solid fa-magnifying-glass-chart",
      description:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
    },
    {
      id: 3,
      icon: "fa-solid fa-square-poll-vertical",
      description:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
    }
  ];
  return (
    <>
      <div className={`${style.about} pt-5`} id="about">
        <div className="container mt-5">
          {/* <h2 className="text-center display-5 fw-bold my-5">About Us</h2> */}
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
          <div className="my-5">
            <div className="container">
              <h3 className="text-center">How it works?</h3>
              <div className="my-5  ">
                <div className={style.timeline}>
                  {steps.map((step, index) => {
                    return (
                      <div
                        key={step.id}
                        className={`${style.container} ${
                          index % 2 === 0 ? style.left : style.right
                        }`}
                      >
                        <div className={style.content}>
                          <div className="px-1">
                            <p className="text-center">
                              <span className="work-icon">
                                <i className={step.icon}></i>
                              </span>
                            </p>
                            <p className="text-center pt-3">
                              Lorem ipsum dolor sit amet, quo ei simul congue
                              exerci, ad nec admodum perfecto mnesarchum, vim ea
                              mazim fierent detracto. Ea quis iuvaret expetendis
                              his, te elit voluptua dignissim per, habeo iusto
                              primis ea eam.
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
              
          <div className="my-5">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
