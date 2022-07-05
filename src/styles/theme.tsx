// theme.ts
const season = {
  spring: {
    background: "yellow",
  },
  summer: {
    background: "blue",
  },
  fall: {
    background: "orange",
  },
  winter: {
    background: "white",
  },
};

export type Season = typeof season;

export default { season };
