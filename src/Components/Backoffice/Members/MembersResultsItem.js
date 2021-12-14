import React, { useEffect } from "react";
import { TableCell, TableRow, Button, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { formatDate } from "../../../Utils/formatters";
import { Link } from "react-router-dom";
import "../../../Styles/TableStyle.css";
import * as membersActions from "../../../app/MembersReducer/membersReducer";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMember } from "../../../Services/membersService";

const MembersResultsItem = ({ item }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onEdit = (id) => {
    dispatch(membersActions.getById(id)).then(() => {
      history.push(`/backoffice/members/edit/${id}`);
    });
  };
  const onDelete = (id) => dispatch(membersActions.deletebyId(id));

  const members = useSelector((state) => state.members.data);

  return (
    <>
      <TableRow key={item.name}>
        <TableCell component="th" scope="row">
          {item && item.name}
        </TableCell>
        <TableCell align="center">
          <img
            className="table-row-image"
            src={item && item.image}
            alt={item && item.name}
            key={item && item.id}
          />
        </TableCell>
        <TableCell align="center">{formatDate(new Date())}</TableCell>
        <TableCell align="center">
          <IconButton onClick={() => onEdit(item.id)}>
            <Edit />
          </IconButton>
          <IconButton onClick={() => onDelete(item.id)}>
            <Delete />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
};

export default MembersResultsItem;
