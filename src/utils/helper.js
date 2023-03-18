import {
  BILL_CATEGORY,
  BILL_TYPE_ENUM,
  commercialElectricityBillTariff,
  commercialWaterBillTariff,
  residentialElectricityBillTariff,
  residentialWaterBillTariff,
} from "./constant";

export const selectTariff = (billType, category) => {
  if (
    billType === BILL_TYPE_ENUM.ELECTRICITY &&
    category === BILL_CATEGORY.COMMERCIAL
  ) {
    return commercialElectricityBillTariff;
  } else if (
    billType === BILL_TYPE_ENUM.ELECTRICITY &&
    category === BILL_CATEGORY.RESIDENTIAL
  ) {
    return residentialElectricityBillTariff;
  } else if (
    billType === BILL_TYPE_ENUM.WATER &&
    category === BILL_CATEGORY.COMMERCIAL
  ) {
    return commercialWaterBillTariff;
  } else {
    return residentialWaterBillTariff;
  }
};

export const ccyFormat = (num) => {
  return `${num.toFixed(2)}`;
};

export const calculate = (unitUsage, billType, category) => {
  const tariff = selectTariff(billType, category);
  let index = 0;
  let qty = 0;
  let rows = [];
  let total = 0;

  while (tariff[index][2] < unitUsage) {
    qty = tariff[index][1] - tariff[index][0];
    unitUsage = unitUsage - qty;
    const to =
      tariff[index][1] === 10000000000000000 ? "&infin;" : tariff[index][1];
    const desc = `${tariff[index][0]} - ${to}`;
    const unitPrice = tariff[index][3];
    const price = qty * unitPrice;
    rows[index] = {
      desc,
      qty,
      unit: unitPrice,
      price,
    };
    total = parseFloat(total) + parseFloat(price);
    index++;
  }

  if (unitUsage > 0) {
    qty = tariff[index][1] - tariff[index][0];
    qty = unitUsage > tariff[index][1] ? unitUsage - qty : unitUsage;
    const to =
      tariff[index][1] === 10000000000000000 ? "&infin;" : tariff[index][1];
    const desc = `${tariff[index][0]} - ${to}`;
    const unitPrice = tariff[index][3];
    const price = qty * unitPrice;
    rows[index] = {
      desc,
      qty,
      unit: unitPrice,
      price,
    };
    total += price;
  }

  const fixedCharge = tariff[index][4];
  total += fixedCharge;

  const vat = (total * 2.5) / 100;
  const gTotal = parseFloat(total) + parseFloat(vat);

  return {
    rows,
    fixedCharge,
    total,
    vat,
    gTotal,
  };
};

export const pxToMm = (px, offsetHeight) => {
  return Math.floor(px / offsetHeight);
};

export const mmToPx = (mm, offsetHeight) => {
  return offsetHeight * mm;
};

export const range = (start, end) => {
  return Array(end - start)
    .join(0)
    .split(0)
    .map(function (val, id) {
      return id + start;
    });
};
