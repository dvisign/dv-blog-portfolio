import moment from "moment";

export const getSeason = (date: Date) => {
  const d = Number(moment(date).format("MM"));
  let season = "";
  if (d >= 3 && d <= 5) {
    season = "spring";
  }
  if (d >= 6 && d <= 8) {
    season = "summer";
  }
  if (d >= 9 && d <= 11) {
    season = "fall";
  }
  if (d >= 12 && d <= 2) {
    season = "winter";
  }
  return season;
};

export const test = "";
