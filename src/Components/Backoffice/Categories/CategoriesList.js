import { Link, useHistory } from "react-router-dom";
import TableEditable from "../../common/EditableTable";
import { NewsTableRows } from "../../News/NewsTableRows";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Button,
  TableRow,
} from "@mui/material";
import "../../../Styles/TableStyle.css";
import "../../../Styles/Table.css";
import TitleBackoffice from "../TitleBackoffice";
const CategoriesList = () => {
  const linkStyle = { textDecoration: "none" };
  const mockCategories = [
    { id: 1, name: "Name Category 1", createdAt: "29/11/2021" },
    { id: 2, name: "Name Category 2", createdAt: "29/11/2021" },
    { id: 3, name: "Name Category 3", createdAt: "29/11/2021" },
  ];
  const history = useHistory();
  const handleEditClick = (id) => history.push(`/backoffice/categories/edit/${id}`);
  const handleDeleteClick = () => {};

  return (
    <>
     <TitleBackoffice title={"Edición de Categorías"} />
      <TableContainer className="TableContainer">
        <Table className="TableFinal">
          <TableHead className="TableRowModify">
            <TableRow>
              <TableCell align="center" className="TableCell">
                Name
              </TableCell>
              <TableCell align="center" className="TableCell">
                Created At
              </TableCell>
              <TableCell align="center" className="TableCell">
                  <Button
                    color="buttoncreatenews"
                    variant="contained"
                    size="small"
                    component={Link}
                    to="/backoffice/categories/create"
                  >
                    Create Category
                  </Button>
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockCategories.map((category) => (
              <TableEditable
                element={category}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default CategoriesList;
