import {
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import * as React from "react";
import { BILL_CATEGORY, BILL_TYPE_ENUM } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setCustomerData, setBillVisibility } from "../redux/actions";
import { calculate } from "../utils/helper";
import {
  APARTMENT_TRANS,
  BILL_TRANS,
  BILL_TYPE_TRANS,
  CALCULATE_TRANS,
  COMMERCIAL_TRANS,
  CUSTOMER_CATEGORY_TRANS,
  ELECTRICITY_TRANS,
  RESIDENTIAL_TRANS,
  RESIDENT_NAME_TRANS,
  UNIT_USAGE_TRANS,
  WATER_TRANS,
} from "../utils/translation";

export default function CustomForm() {
  const dispatch = useDispatch();
  const [billType, setBillType] = React.useState("");
  const [residentName, setResidentName] = React.useState("");
  const [apartment, setApartment] = React.useState("");
  const [unitUsage, setUnitUsage] = React.useState(0);
  const [customerCategory, setCustomerCategory] = React.useState("");

  const nameReducer = useSelector((state) => state.nameReducer);
  const { rows, fixedCharge, total, vat, gTotal } = calculate(
    unitUsage,
    billType,
    customerCategory
  );

  const handleSubmit = () => {
    dispatch(
      setCustomerData({
        billType,
        residentName,
        apartment,
        unitUsage,
        customerCategory,
        billOutput: {
          rows,
          fixedCharge,
          total,
          vat,
          gTotal,
        },
      })
    );
    dispatch(setBillVisibility(true));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            onChange={(e) => setResidentName(e.target.value)}
            margin="normal"
            required
            fullWidth
            value={residentName}
            id="residentName"
            label={RESIDENT_NAME_TRANS[nameReducer.language]}
            name="residentName"
            autoFocus
          />
          <TextField
            onChange={(e) => setApartment(e.target.value)}
            margin="normal"
            value={apartment}
            required
            fullWidth
            id="apartment"
            label={APARTMENT_TRANS[nameReducer.language]}
            name="apartment"
            autoFocus
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              {BILL_TYPE_TRANS[nameReducer.language]}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={billType}
              label="Bill Type"
              onChange={(e) => setBillType(e.target.value)}
            >
              <MenuItem value={BILL_TYPE_ENUM.ELECTRICITY}>
                {ELECTRICITY_TRANS[nameReducer.language] +
                  " " +
                  BILL_TRANS[nameReducer.language]}
              </MenuItem>
              <MenuItem value={BILL_TYPE_ENUM.WATER}>
                {WATER_TRANS[nameReducer.language]+
                  " " +
                  BILL_TRANS[nameReducer.language]}
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              {CUSTOMER_CATEGORY_TRANS[nameReducer.language]}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={customerCategory}
              label="Customer Category"
              onChange={(e) => setCustomerCategory(e.target.value)}
            >
              <MenuItem value={BILL_CATEGORY.COMMERCIAL}>
                {COMMERCIAL_TRANS[nameReducer.language]}
              </MenuItem>
              <MenuItem value={BILL_CATEGORY.RESIDENTIAL}>
                {RESIDENTIAL_TRANS[nameReducer.language]}
              </MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="normal"
            required
            fullWidth
            onChange={(e) => setUnitUsage(e.target.value)}
            type="number"
            value={unitUsage}
            id="unitUsage"
            label={UNIT_USAGE_TRANS[nameReducer.language]}
            name="unitUsage"
            autoFocus
          />
          <Button
            color="success"
            onClick={handleSubmit}
            disabled={
              !residentName ||
              !apartment ||
              !billType ||
              !customerCategory ||
              !unitUsage
            }
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {CALCULATE_TRANS[nameReducer.language]}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
