import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#0d0d0d",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(tx, method, source, destination, status, create) {
  return { tx, method, source, destination, status, create };
}

const rows = [
  createData(
    "6F2E1575...AAEC58CC",
    "217.47 axlUSDC",
    "terra1...gmz227uw",
    "osmo1xrd5gu...5mmrq4wd",
    "Received",
    "8 minutes ago"
  ),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Transfer = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>TX HASH</StyledTableCell>
            <StyledTableCell align="left">METHOD</StyledTableCell>
            <StyledTableCell align="left">SOURCE</StyledTableCell>
            <StyledTableCell align="left">DESTINATION</StyledTableCell>
            <StyledTableCell align="left">STATUS</StyledTableCell>
            <StyledTableCell align="left">CREATED AT</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.tx}
              </StyledTableCell>
              <StyledTableCell align="left">{row.method}</StyledTableCell>
              <StyledTableCell align="left">
                Axelar
                <br />
                {row.source}
              </StyledTableCell>
              <StyledTableCell align="left">
                Osmosis
                <br />
                {row.destination}
              </StyledTableCell>
              <StyledTableCell align="left">{row.status}</StyledTableCell>
              <StyledTableCell align="left">{row.create}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Transfer;
