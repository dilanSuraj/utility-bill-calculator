import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

import {
  APARTMENT_TRANS,
  BILL_TRANS,
  COMMERCIAL_TRANS,
  ELECTRICITY_TRANS,
  RESIDENTIAL_TRANS,
  RESIDENT_NAME_TRANS,
  WATER_TRANS,
} from "../utils/translation";
import { BILL_CATEGORY, BILL_TYPE_ENUM } from "../utils/constant";

export default function CustomerDetails() {
  const nameReducer = useSelector((state) => state.nameReducer);
  const billTypeTrans = nameReducer.billType === BILL_TYPE_ENUM.ELECTRICITY ? ELECTRICITY_TRANS: WATER_TRANS;
  const customerCategoryTrans = nameReducer.customerCategory === BILL_CATEGORY.COMMERCIAL ? COMMERCIAL_TRANS : RESIDENTIAL_TRANS;
  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent style={{ textAlign: "center" }}>
        <Typography variant="h5" component="div">
          {RESIDENT_NAME_TRANS[nameReducer.language]} :{" "}
          {nameReducer.residentName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {APARTMENT_TRANS[nameReducer.language]} : {nameReducer.apartment}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          {billTypeTrans[nameReducer.language] + " "+ 
            BILL_TRANS[nameReducer.language]}
          - {customerCategoryTrans[nameReducer.language]}
        </Button>
      </CardActions>
    </Card>
  );
}
