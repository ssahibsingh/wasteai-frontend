import React from "react";
import style from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className={style.header}>
        <div className="container ">
          <div className="row align-items-center header">
            <div className="col-md-6 col-sm-8 col-12">
              <div className="d-flex justify-content-center">
                <div className="p-5">
                  <h1 className="display-1 fw-bold text-second">Waste AI</h1>
                  <p className="">
                  Revolutionizing waste management with AI. WasteAI.co - Snap, Sort, Succeed. Accurately classify trash with deep learning. Experience a cleaner future.
                  </p>
                  <div className="mt-5 d-flex ">
                    <Link href="/try-me" className="btn btn-main">
                     Try for free
                    </Link>
                    <a href="#about" className="btn btn-grey margin-left">Explore More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
