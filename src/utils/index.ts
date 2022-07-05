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

export const covertHexToRgb = (hex: string, opacity?: number | null) => {
  const short = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const hexs = hex.replace(short, (o, r, g, b) => {
    return r + r + g + g + b + b;
  });
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexs);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        a: opacity || 1,
      }
    : null;
};
