import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Button } from "@mui/material";
import EditHomeItem from "./EditHomeItem";
import { getSlides } from "../../../Services/slidesService";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "../../FormStyles.css";
import Swal from "sweetalert2";

const EditHomeForm = ({ homeEditWelcomeTitle }) => {
  const [slides, setSlides] = useState([]);
  const [slidesIds, setSlidesIds] = useState([]);

  useEffect(() => {
    getSlides()
      .then((response) => setSlides(response))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const ShowSucessAlert = () => {
    Swal.fire("Home Actualizado!");
  };

  const showSlidesEditionForm = () =>
    slides.map((slide) => (
      <EditHomeItem
        item={slide}
        slidesIds={slidesIds}
        setSlidesIds={setSlidesIds}
      />
    ));

  const formik = useFormik({
    initialValues: { homeEditWelcomeTitle },

    validate: (values) => {
      let errors = {};
      if (!values.homeEditWelcomeTitle) {
        errors.homeEditWelcomeTitle = "Required";
      }
      return errors;
    },

    onSubmit: (values, { resetForm }) => {
      resetForm({ values: "" });
      ShowSucessAlert();
    },
  });

  return (
    <>
      <form
        style={{ width: "60%" }}
        id="homeEditForm"
        name="homeEditForm"
        onSubmit={formik.handleSubmit}
        className="form-container"
      >
        <h1 id="homeEditTitle" name="homeEditTitle">
          Página de Edición de Home
        </h1>
        <Button
          id="homeEditSubmitButton"
          name="homeEditSubmitButton"
          class="submit-btn"
          type="submit"
          variant="contained"
        >
          Aplicar Cambios
        </Button>
        <strong>
          <label
            id="homeEditWelcomeLabel"
            name="homeEditWelcomeLabel"
            htmlFor="homeEditWelcomeTitle"
            type="text"
          >
            Título de bienvenida:
          </label>
        </strong>
        <input
          id="homeEditWelcomeTitle"
          name="homeEditWelcomeTitle"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.homeEditWelcomeTitle}
          className="form-control input-field"
          maxLength={20}
        ></input>
        {formik.errors.homeEditWelcomeTitle}
        <h2 id="homeEditSubTitle" name="homeEditSubTitle">
          Seleccionar 3 imágenes:
        </h2>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell> Nombre </TableCell>
                <TableCell> Foto </TableCell>
                <TableCell> Acciones </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{showSlidesEditionForm()}</TableBody>
          </Table>
        </TableContainer>
      </form>
    </>
  );
};

export default EditHomeForm;
