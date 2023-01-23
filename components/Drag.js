import axios from "axios";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BsFolder } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

const baseStyle = {
  flex: 1,
  width: "100%",
  height: "30vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  //   padding: "20px",
  borderWidth: "5px",
  borderRadius: "30px",
  //   borderColor: "#d2a52a8d",
  borderColor: "#999",
  borderStyle: "dashed",
  // backgroundColor: "#a2c1a593",
  backgroundColor: "#cdf0d0",
  color: "#000",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00B895",
};

const rejectStyle = {
  borderColor: "#8b152d",
};

const Drag = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isDragActive,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: { "image/*": [] },
    maxFiles: 1,
    onDrop: (acceptedFiles, fileRejectionItems) => {
      if (fileRejectionItems.length > 0) {
        setError(fileRejectionItems[0].errors[0].message);
      }

      if (acceptedFiles.length > 0) {
        setError(null);
        setResult(null);
        let cfile = acceptedFiles[0];
        cfile.preview = URL.createObjectURL(cfile);
        console.log(cfile);
        setFile(cfile);
      }
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  const handleUpload = async () => {
    setLoading(true);
    let formData = new FormData();
    formData.append("image", file);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    try {
      let response = await axios.post(
        "https://api.wasteai.co/",
        formData,
        config
      );
      console.log(response.data);
      if (response.data.success) {
        setResult(response.data);
        setFile(null);
        setError(null);
      } else {
        setError(response.data.message);
        setFile(null);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
    setLoading(false);
  };
  return (
    <>
      <div className="col-md-6 col-sm-12 col-12 text-center">   
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <div className={isDragActive ? "text-muted" : null}>
            <div>
              <BsFolder
                className={isDragActive ? "drop-icon text-muted" : "drop-icon"}
              />
              <p>
                Upload or Drag and <br></br>drop your image
              </p>
            </div>
          </div>
        </div>
        {file && file.preview && (
          <div className="mt-3">
            <div className="container">
              <div className="row text-center justify-content-center">
                <div className="col-md-10 col-12 image-preview">
                  <div className="d-flex justify-content-around align-items-center">
                    <div className="d-flex justify-content-around gap-3 align-items-center">
                      <Image
                        className="rounded"
                        src={file.preview}
                        alt=""
                        width={150}
                        height={150}
                      />
                      <p className="">{file.name}</p>
                    </div>
                    <div className="d-flex justify-content-around align-items-center gap-2">
                      <button
                        onClick={() => {
                          setFile(null);
                        }}
                        className="btn-danger p-0 px-2 pb-1 btn rounded-circle"
                      >
                        x
                      </button>
                      <button className="btn btn-main" onClick={handleUpload}>
                        Predict
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-1">
          <div className="row text-center justify-content-center">
            {error ? (
              <>
                <div className="col-12">
                  <p className="text-danger">{error}</p>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        {loading && (
          <div className="mt-3">
            <p>Predicting.... Please Wait</p>
          </div>
        )}
        {result && (
          <div className="mt-3">
            <div className="row justify-content-center align-items-center ">
              <div className="col-md-6 col-sm-12 col-12 mb-2">
                <Image className="rounded" src={`https://api.wasteai.co/image/${result.image_id}`} alt="" width={150} height={150} /> 
              </div>
              <div className="col-md-6 col-sm-12 col-12 text-second text-start mt-2">
                <p>Prediction: <span className="text-capitalize fw-bold">{result.prediction}</span></p>
                <p>Confidence: <span className="fw-bold">{result.confidence}</span></p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Drag;
