import React from "react";
import style from "@/styles/Home.module.css";
const Howitworks = () => {
  let steps = [
    {
      id: 1,
      icon: "fa-regular fa-image",
      title: "Take / Upload Image",
      description:
        " The first step to using WasteAI.co is to take a picture of your trash or upload an existing image from your device. The image should be clear and well-lit, and should contain only one type of trash for the best results.",
    },
    {
      id: 2,
      icon: "fa-solid fa-magnifying-glass-chart",
      title: "Model Predicts",
      description:
        "Once the image is uploaded, the website's deep learning model will analyze the image and make a prediction on what type of trash is present in the image. The model has been trained on a large dataset of trash images, allowing it to accurately identify various types of waste.",
    },
    {
      id: 3,
      icon: "fa-solid fa-square-poll-vertical",
      title: "Results",
      description:
        "The final step is to view the results of the model's prediction. The website will display the predicted type of trash, as well as the confidence level of the prediction. The confidence level is a percentage that represents how confident the model is in its prediction.",
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
