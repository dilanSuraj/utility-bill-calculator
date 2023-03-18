import {
  SET_UTILITY_BILL_VISIBLE,
  SET_UTILITY_BILL_CUSTOMER_DATA,
  SET_LANGUAGE,
} from "../types";

export const setTranslationLanguage = (language) => (dispatch, getState) => {
  try {
    dispatch({
      type: SET_LANGUAGE,
      payload: {
        language,
      },
    });
  } catch (error) {
    console.log("Error", error);
  }
};

export const setBillVisibility = (isBillVisible) => (dispatch, getState) => {
  try {
    dispatch({
      type: SET_UTILITY_BILL_VISIBLE,
      payload: {
        isBillVisible,
      },
    });
  } catch (error) {
    console.log("Error", error);
  }
};
export const setCustomerData =
  (
    customerData = {
      residentName: "",
      apartment: "",
      billType: "",
      customerCategory: "",
      unitUsage: 0,
    }
  ) =>
  (dispatch, getState) => {
    try {
      dispatch({
        type: SET_UTILITY_BILL_CUSTOMER_DATA,
        payload: {
          ...customerData,
        },
      });
    } catch (error) {
      console.log("Error", error);
    }
  };
