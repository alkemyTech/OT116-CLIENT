import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import MembersResultsItem from "./MembersResultsItem";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../app/MembersReducer/membersReducer";
import TitleBackoffice from "../../Backoffice/TitleBackoffice";
import { useHistory } from "react-router-dom";
const MembersResults = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members.data);
  const showMembers = () =>
    members.map((member) => (
      <MembersResultsItem
        item={member}
      />
    ));

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <>
      <TitleBackoffice title={"Edición de Miembros"} />
      <TableContainer className="TableContainer">
        <Table className="TableFinal">
          <TableHead className="TableRowModify">
            <TableRow>
              <TableCell className="TableCell" align="center">
                Name
              </TableCell>
              <TableCell className="TableCell" align="center">
                Image
              </TableCell>
              <TableCell className="TableCell" align="center">
                CreatedAt
              </TableCell>
              <TableCell align="center" className="TableCell">
                <Button
                  color="buttoncreatenews"
                  variant="contained"
                  size="small"
                  component={Link}
                  to="/backoffice/members/create"
                >
                  Create Member
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody color="tablebackground">{showMembers()}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MembersResults;
