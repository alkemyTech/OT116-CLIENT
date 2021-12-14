import React, { useState } from "react";
import "../../Styles/TermsAndConditionsStyle.css";
import Popup from "reactjs-popup";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import samplePDF from "../../Assets/TermsAndConditions/Terms_and_conditions.pdf";
import { Button } from "@mui/material";

const UsersFormTerms = ({ setAcceptTerms, showTerms }) => {
  const handlerTermsAccepted = () => {
    setAcceptTerms(true);
  };

  return (
    <>
      <Popup
        trigger={showTerms && <Button> Términos y Condiciones </Button>}
        modal
        nested
      >
        {(close) => (
          <div>
            <Button onClick={close}>&times;</Button>
            <div>
              <Document file={samplePDF}>
                <Page pageNumber={1} size="A6" />
              </Document>
            </div>
            <div className="actions">
              <Button
                onClick={() => {
                  handlerTermsAccepted();
                  close();
                }}
                variant="outlined"
                color="success"
              >
                Aceptar
              </Button>{" "}
              <Button
                onClick={() => {
                  close();
                }}
                variant="outlined"
                color="error"
              >
                Cancelar
              </Button>
            </div>
          </div>
        )}
      </Popup>
    </>
  );
};

export default UsersFormTerms;
