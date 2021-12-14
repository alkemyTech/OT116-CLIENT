import React from 'react'
import { Link } from 'react-router-dom';
import { Edit, Delete } from "@mui/icons-material";
import {Table,TableBody,TableCell,TableContainer,TableHead,Button,TableRow,IconButton} from "@mui/material";
import '../../../Styles/TableStyle.css'
import { Fade } from "react-awesome-reveal";
const BackofficeUsers = () => {
      const UsersTable =[
        {
          "id": 7,
          "email": "michael.lawson@alkemy.org",
          "nombre": "Michael",
        },
        {
          "id": 8,
          "email": "lindsay@alkemy.org",
          "nombre": "Lindsay",
        },
        {
          "id": 9,
          "email": "tobias.funke@alkemy.org",
          "nombre": "Tobias",
        }]
      const handdleEdit = () => {
          alert("use this if you need to modificate")
      }
      const handdleDelete = () => {
          alert("use this if you need to delete")
      }
    return (
      <>
       <Fade duration="2000">
        <div className="TableContainer">
            {/* <Button color="button" variant="contained">
             <Link className="CreateUserLinkBackoffice" to="/backoffice/users/create">Create User</Link>
             </Button>
             <hr></hr> */}
        <Table className="TableFinal">
        <TableHead className="TableRowModify">
          <TableRow>
            <TableCell className="TableCell" >Nombre</TableCell>
            <TableCell className="TableCell">Id</TableCell>
            <TableCell className="TableCell">Email</TableCell>
            <TableCell className="TableCell">Editar</TableCell>
            <TableCell className="TableCell">Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {UsersTable.map((user) => (
          <TableRow>
            <TableCell>{user.nombre}</TableCell>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell><IconButton onClick={handdleEdit} variant="contained"><Edit/></IconButton></TableCell>
            <TableCell><IconButton onClick={handdleDelete} variant="contained" ><Delete/></IconButton></TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
      </div>
      </Fade>
      </>
    )
}

export default BackofficeUsers
