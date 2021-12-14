import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { NewsTableRows } from "./NewsTableRows";
import { createNewsObject } from "../../Services/newsServices";
import GlobalStyles from "@mui/material/GlobalStyles";
import { Reveal, Fade } from "react-awesome-reveal";
import TitleBackoffice from "../Backoffice/TitleBackoffice";

const onEdit = (id) => console.log(`Editing a news with id:${id}`);
const onDelete = (id) => console.log(`Deleting a news with id:${id}`);

const newsList = [
  createNewsObject(1, "Novedad 1", "https://bit.ly/3GRp1al", new Date()),
  createNewsObject(2, "Novedad 2", "https://bit.ly/3GRp1al", new Date()),
  createNewsObject(3, "Novedad 3", "https://bit.ly/3GRp1al", new Date()),
];

const NewsListEditTable = () => {
  return (
    <>
      <TitleBackoffice title={"Edición de Noticias"} />
      <Fade duration="2000">
        <TableContainer className="TableContainer">
          <GlobalStyles styles={{ TableHead: { color: "pink" } }} />
          <Table className="TableFinal" size="medium" aria-label="simple table">
            <TableHead className="TableRowModify">
              <TableRow>
                <TableCell className="TableCell">Name</TableCell>
                <TableCell className="TableCell" align="center">
                  Image
                </TableCell>
                <TableCell className="TableCell" align="center">
                  Created At
                </TableCell>
                <TableCell className="TableCell" align="center">
                  <Button
                    color="buttoncreatenews"
                    variant="contained"
                    size="small"
                    component={Link}
                    to="/backoffice/news/create"
                  >
                    Create News
                  </Button>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <NewsTableRows
                newsList={newsList}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            </TableBody>
          </Table>
        </TableContainer>
      </Fade>
    </>
  );
};
export default NewsListEditTable;
