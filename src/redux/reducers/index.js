import {
  SET_UTILITY_BILL_VISIBLE,
  SET_UTILITY_BILL_CUSTOMER_DATA,
  SET_LANGUAGE,
} from "../types";

const INITIAL_STATE = {
  isBillVisible: false,
  residentName: "",
  apartment: "",
  billType: "",
  customerCategory: "",
  unitUsage: 0,
  billOutput: {
    rows: [],
    fixedCharge: 0,
    total: 0,
    vat: 0,
    gTotal: 0,
  },
  month: '',
  language: 'en'
};

const Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_UTILITY_BILL_VISIBLE:
      return {
        ...state,
        ...action.payload,
      };
    case SET_UTILITY_BILL_CUSTOMER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case SET_LANGUAGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return INITIAL_STATE;
  }
};

export default Reducer;
