import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import CustomTable from "./components/CustomTable";
import SellIcon from "@mui/icons-material/Sell";
import CustomForm from "./components/CustomForm";
import { useDispatch, useSelector } from "react-redux";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { setTranslationLanguage } from "./redux/actions";
import { UTILITY_BILL_CALCULATOR_TRANS } from "./utils/translation";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Dilan Suraj Amarasinghe
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const App = () => {
  const nameReducer = useSelector((state) => state.nameReducer);
  const [language, setLanguage] = React.useState("en");
  const dispatch = useDispatch();
  const selectLanguage = (language) => {
    setLanguage(language);
    dispatch(setTranslationLanguage(language));
  };
  const ref = React.useRef(null);
  document.title = "Utility Bill Calculator";
  return (
    <Container fixed>
      <Box sx={{ my: 4 }}>
        <ToggleButtonGroup
          color="primary"
          value={language}
          exclusive
          onChange={(e) => selectLanguage(e.target.value)}
          aria-label="Platform"
        >
          <ToggleButton value="en">English</ToggleButton>
          <ToggleButton value="sn">සිංහල</ToggleButton>
        </ToggleButtonGroup>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          <SellIcon color="error" fontSize="large" />{" "}
          {UTILITY_BILL_CALCULATOR_TRANS[language] + " "}
          <SellIcon color="error" fontSize="large" />
        </Typography>
        <CustomForm />
        {nameReducer.isBillVisible ? (
          <CustomTable ref={ref} id="divToPrint" />
        ) : null}

        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Box>
    </Container>
  );
};

export default React.forwardRef(App);
