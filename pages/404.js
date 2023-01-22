import Image from "next/image";
import Link from "next/link";
import React from "react";

const Error = () => {
    return (
        <>
            <div className="error-page p-5 d-flex justify-content-center align-items-center">
                <div>
                    <Image
                        src="/404.svg"
                        className="img-fluid"
                        alt="404"
                        width={400}
                        height={400}
                        priority={true}
                    />
                    <h4 className="text-center mt-5 fs-3">Page Not Found</h4>
                    <p className="text-center">
                        <Link href="/" className="text-decoration-none text-second fs-3">
                            &larr; Go Back to Home
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Error;