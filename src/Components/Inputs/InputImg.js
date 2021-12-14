import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";

const InputImg = ({ news, setNews }) => {
  console.log(news);

  const handleDrop = (acceptedFiles) =>
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const binaryStr = reader.result;
        setNews({ ...news, image: binaryStr });
      };
      reader.readAsDataURL(file);
    });

  useEffect(() => {}, [news.image]);
  return (
    <div>
      <Dropzone
        onDrop={handleDrop}
        accept="image/jpeg, image/png"
        multiple={false}
        maxSize={1000000}
        className="dropzone"
        activeClassName="active-dropzone"
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p style={{ cursor: "pointer" }}>
              Drag'n'drop files, or click to select files
            </p>
          </div>
        )}
      </Dropzone>
      <div>
        <strong>Files:</strong>
        <ul style={{ listStyle: "none" }}>
          {news.image && (
            <li>
              <img
                style={{ width: "250px", height: "200px" }}
                src={news.image}
                alt="img"
              />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default InputImg;
