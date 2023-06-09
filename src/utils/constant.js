export const BILL_TYPE_ENUM = {
  ELECTRICITY: "Electricity",
  WATER: "Water",
};

export const BILL_CATEGORY = {
  COMMERCIAL: "Commercial",
  RESIDENTIAL: "Resident",
};

export const TAX_RATE = 0.025;

export const COMMERCIAL_ELECTRICITY_TARIFF = {
  0: [0, 30, 30, 30, 400],
  1: [31, 60, 30, 37, 550],
  2: [61, 90, 30, 42, 650],
  3: [91, 180, 90, 50, 1500],
  4: [181, 10000000000000000, 10000000000000000, 75, 2000],
};
export const RESIDENTIAL_ELECTRICITY_TARIFF_BELOW_SIXTY = {
  0: [0, 30, 30, 30, 400],
  1: [31, 60, 30, 37, 550],
};

export const RESIDENTIAL_ELECTRICITY_TARIFF_ABOVE_SIXTY = {
  0: [0, 90, 90, 42, 650],
  1: [91, 180, 90, 50, 1500],
  2: [181, 10000000000000000, 10000000000000000, 75, 2000],
};

export const COMMERCIAL_WATER_TARIFF = {
  0: [0, 25, 25, 116, 300],
  1: [26, 50, 25, 116, 575],
  2: [51, 100, 50, 116, 1150],
  3: [101, 200, 100, 116, 1840],
  4: [201, 10000000000000000, 10000000000000000, 75, 1840],
};
export const RESIDENTIAL_WATER_TARIFF = {
  0: [0, 5, 5, 20, 300],
  1: [5, 10, 5, 27, 300],
  2: [11, 15, 5, 34, 300],
  3: [16, 20, 5, 68, 300],
  4: [21, 25, 5, 99, 300],
  5: [26, 30, 5, 150, 900],
  6: [31, 40, 10, 179, 900],
  7: [41, 50, 10, 204, 2400],
  8: [51, 75, 25, 221, 2400],
  9: [75, 10000000000000000, 10000000000000000, 238, 3500],
};
