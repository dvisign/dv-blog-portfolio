// theme.ts
const season = {
  spring: {
    baseColor: "yellow",
    dark: {
      red: "#C1292F",
      blue: "#DDF0EF",
      green: "#048686",
    },
    light: {
      red: "#E16E60",
      blue: "#659BD1",
      green: "#70B7C5",
    },
  },
  summer: {
    baseColor: "#43bcc6",
    dark: {
      red: "#C1292F",
      blue: "#1986cb",
      green: "#048686",
    },
    light: {
      red: "#E16E60",
      blue: "#659BD1",
      green: "#70B7C5",
    },
  },
  fall: {
    baseColor: "orange",
    dark: {
      red: "#C1292F",
      blue: "#1986cb",
      green: "#048686",
    },
    light: {
      red: "#E16E60",
      blue: "#659BD1",
      green: "#70B7C5",
    },
  },
  winter: {
    baseColor: "white",
    dark: {
      red: "#C1292F",
      blue: "#1986cb",
      green: "#048686",
    },
    light: {
      red: "#E16E60",
      blue: "#659BD1",
      green: "#70B7C5",
    },
  },
};

export type Season = typeof season;

export default { season };
