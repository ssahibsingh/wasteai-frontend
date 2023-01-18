import React from "react";
import style from "@/styles/Home.module.css";
const Howitworks = () => {
  let steps = [
    {
      id: 1,
      icon: "fa-regular fa-image",
      title: "Take / Upload Image",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem enim porro hic itaque consectetur nisi impedit aperiam quisquam. Eaque, ",
    },
    {
      id: 2,
      icon: "fa-solid fa-magnifying-glass-chart",
      title: "Model Predicts",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem enim porro hic itaque consectetur nisi impedit aperiam quisquam. Eaque, ",
    },
    {
      id: 3,
      icon: "fa-solid fa-square-poll-vertical",
      title: "Results",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem enim porro hic itaque consectetur nisi impedit aperiam quisquam. Eaque, ",
    },
  ];
  return (
    <>
      <div className={`${style.about} d-flex justify-content-center pb-5`}>
        <div className="">
          <h3 className="text-center text-second">How it works?</h3>
          <div className="my-5">
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
                      <div className="">
                        <p className="text-center">
                          <span className="work-icon">
                            <i className={step.icon}></i>
                          </span>
                        </p>
                        <h5 className="text-center pt-3">
                          {step.title}
                        </h5>
                        <p className="text-center pt-2">
                        {step.description}
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
    </>
  );
};

export default Howitworks;
