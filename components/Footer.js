import Link from "next/link";
import React from "react";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <>
      <div className="footer py-4 shadow-lg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-12">
              <p className="text-center text-muted">
                Copyright &copy; {year}{" "}
                <Link href="/" className="text-second text-decoration-none">
                  WasteAI.co
                </Link>
                . All Rights Reserved.
              </p>
            </div>
            {/* <div className="col-md-6 col-12">
              <p className="text-center">Developed with ❣️ by <Link href="https://github.com/ssahibsingh" className="text-second">Sahib Singh</Link></p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
