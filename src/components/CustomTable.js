import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import { BILL_TYPE_ENUM, TAX_RATE } from "../utils/constant";
import { useSelector } from "react-redux";
import { ccyFormat } from "../utils/helper";
import {
  BILL_TRANS,
  FIXED_CHARGE_TRANS,
  GRANT_TOTAL_TRANS,
  PRICE_UNIT_TRANS,
  RS_TRANS,
  TAX_TRANS,
  TOTAL_TRANS,
  TOTAL_UNIT_USAGE_TRANS,
  UNIT_TRANS,
} from "../utils/translation";
import CustomerDetails from "./CustomerDetails";

const CustomTable = React.forwardRef((props, ref) => {
  const nameReducer = useSelector((state) => state.nameReducer);
  const totalUnitUsage = nameReducer.unitUsage;
  const billType = nameReducer.billType;
  const billOutput = nameReducer.billOutput;

  return (
    <TableContainer component={Paper} ref={ref}>
      <CustomerDetails />
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bolder" }}>Range</TableCell>
            <TableCell style={{ fontWeight: "bolder" }} align="right">
              {PRICE_UNIT_TRANS[nameReducer.language]}
            </TableCell>
            <TableCell style={{ fontWeight: "bolder" }} align="right">
              {UNIT_TRANS[nameReducer.language]}
            </TableCell>
            <TableCell style={{ fontWeight: "bolder" }} align="right">
              {BILL_TRANS[nameReducer.language]}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {billOutput?.rows?.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>
              {TOTAL_UNIT_USAGE_TRANS[nameReducer.language]}
            </TableCell>
            <TableCell align="right">{totalUnitUsage}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              {FIXED_CHARGE_TRANS[nameReducer.language] +
                RS_TRANS[nameReducer.language]}
            </TableCell>
            <TableCell align="right">
              {ccyFormat(billOutput?.fixedCharge)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
              {TOTAL_TRANS[nameReducer.language] +
                RS_TRANS[nameReducer.language]}
            </TableCell>
            <TableCell align="right">{ccyFormat(billOutput?.total)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={1} />
            <TableCell>
              {TAX_TRANS[nameReducer.language] + RS_TRANS[nameReducer.language]}
            </TableCell>
            <TableCell style={{ fontWeight: "bolder" }} align="right">{`${(
              TAX_RATE * 100
            ).toFixed(1)} %`}</TableCell>
            <TableCell align="right">{ccyFormat(billOutput?.vat)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell style={{ fontWeight: "bolder" }} colSpan={2}>
              {" "}
              {BILL_TYPE_ENUM.ELECTRICITY === billType ? (
                <FlashOnIcon color="warning" />
              ) : (
                <InvertColorsIcon color="info" />
              )}
              {GRANT_TOTAL_TRANS[nameReducer.language] +
                RS_TRANS[nameReducer.language]}
            </TableCell>
            <TableCell
              style={{ fontWeight: "bolder", color: "red" }}
              align="right"
            >
              {ccyFormat(billOutput?.gTotal)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default CustomTable;
