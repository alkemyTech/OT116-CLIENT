import {  IconButton, TableCell } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
const EditableTable = ({ element, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{element.name}</td>
      <td>{element.createdAt}</td>

      <td>
          <IconButton onClick={() => handleEditClick(element.id)}><Edit/> </IconButton>
          <IconButton onClick={() => handleDeleteClick(element.id)}><Delete/> </IconButton>
      </td>
    </tr>
  )
}

export default EditableTable
