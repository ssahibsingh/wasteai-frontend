import axios from "axios";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BsFolder } from "react-icons/bs";


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
    borderColor: "#d2a52a8d",
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
        // try {
        //     let response = await axios.post('https://api.wasteai.co', {
        //         image: file
        //     })
        // } catch (error) {

        // }
        // console.log(file)
        setLoading(true);
        let formData = new FormData(); 
        formData.append('image', file)
        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
        try {
            let response = await axios.post('https://api.wasteai.co/', formData, config)
            console.log(response.data)
            if(response.data.success){
                setResult(response.data)
                setFile(null)
                setError(null)
            }
            else{
                setError(response.data.message)
                setFile(null)
            }
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
        setLoading(false);
    }
    return (
        <>
            <div className="col-md-6 col-sm-12 col-12 text-center">
                <div {...getRootProps({ style })}>
                    {file ? (
                        <>
                            {file.preview && (
                                <div className="d-flex gap-4 justify-content-center align-items-center">
                                    <Image src={file.preview} alt="" width={70} height={70} />
                                    <p className="text-second">{file.name}</p>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <input {...getInputProps()} />
                            <div className={isDragActive ? "text-muted" : null}>
                                <div>
                                    <BsFolder
                                        className={
                                            isDragActive ? "drop-icon text-muted" : "drop-icon"
                                        }
                                    />
                                    <p>
                                        Upload or Drag and <br></br>drop your image
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                <div className="mt-3">
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
                <div className="mt-3">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center align-items-center gap-2">
                            <button
                                className={file ? "btn btn-red" : "btn btn-red disabled"}
                                onClick={() => {
                                    setFile(null);
                                }}
                            >
                                Remove Image
                            </button>
                            <button
                                className={file ? "btn btn-main" : "btn btn-main disabled"}
                                onClick={handleUpload}
                            >
                                Upload Image
                            </button>
                        </div>
                    </div>
                </div>
                {loading && (
                    <div className="mt-3">
                        <p>Predicting.... Please Wait</p>
                    </div>
                )}
                {result && (
                    <div className="mt-3">
                        <div className="row">
                            <div className="col-12 text-second">
                                <p>Prediction: {result.prediction}</p>
                                <p>Confidence: {result.confidence}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Drag;
