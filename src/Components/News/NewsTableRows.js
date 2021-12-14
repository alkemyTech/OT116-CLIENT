import React, { useEffect } from "react";
import { TableRow, TableCell, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { formatDate } from "../../Utils/formatters";
import "../../Styles/Table.css";
import * as newsActions from "../../app/NewsReducer/newsReducer";
import { cleanCurrentState } from "../../app/NewsReducer/newsReducer";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getById } from "../../Services/newsServices";
import Swal from "sweetalert2";

const NewsTableRows = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onEdit = (id) => {
    dispatch(newsActions.getById(id)).then(() => {
      history.push(`/backoffice/news/edit/${id}`);
    });
  };
  const onDelete = (id) => dispatch(newsActions.deletebyId(id));

  const news = useSelector((state) => state.news.data);

  const newsDeleted = () => {
    Swal.fire("Noticia Eliminada");
  };

  useEffect(() => {
    dispatch(newsActions.getAll());
    dispatch(cleanCurrentState());
  }, []);

  return (
    <>
      {news.map((element) => (
        <TableRow key={element.id}>
          <TableCell component="th" scope="row">
            {element.name}
          </TableCell>
          <TableCell align="center">
            <img
              className="table-row-image"
              src={element.image}
              alt={element.name}
            />
          </TableCell>
          <TableCell align="center">{formatDate(new Date())}</TableCell>
          <TableCell align="center">
            <IconButton onClick={() => onEdit(element.id)}>
              <Edit />
            </IconButton>
            <IconButton
              onClick={() => {
                onDelete(element.id);
                newsDeleted();
              }}
            >
              <Delete />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export { NewsTableRows };
