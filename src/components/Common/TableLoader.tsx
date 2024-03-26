// packages block
import { FC } from "react";
import Skeleton from '@mui/material/Skeleton';
import { Table, TableBody, TableRow, TableCell } from "@mui/material";
// interfaces/types block
import { TableLoaderType } from "../../interfaceTypes";

const TableLoader: FC<TableLoaderType> = ({ numberOfRows, numberOfColumns }): JSX.Element => {
  return (
    <Table aria-label="customized table">
      <TableBody>
        {new Array(numberOfRows).fill(1).map((_, index) => (
          <TableRow key={`${index}-TableLoader`}>
            {new Array(numberOfColumns).fill(2).map((_, childIndex) => (
              <TableCell key={`${index}-TableCell-${childIndex}`}>
                <Skeleton />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableLoader;
