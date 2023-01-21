import { Drag } from "@/components";
import React from "react";

const TryMe = () => {
  return (
    <>
      <div className="page try-me">
        <div className="container">
          <h1 className="text-second text-center display-4 fw-bold">Try Me</h1>
          <div className="row justify-content-center mt-3">
              <Drag />
          </div>
        </div>
      </div>
    </>
  );
};

export default TryMe;
