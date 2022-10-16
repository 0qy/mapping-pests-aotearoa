export const dataMap = (pestName) => {
  switch (pestName) {
    case "himalayanTahr":
      return "https://0qy.github.io/data/himalayanTahr2014.json";
    case "feralGoat":
      return "https://0qy.github.io/data/feralGoat2014.json";
    case "stoat":
      return "https://0qy.github.io/data/stoat2014.json";
    case "redDeer":
      return "https://0qy.github.io/data/redDeer2014.json";
    case "possom":
      return "https://0qy.github.io/data/possom2014.json";
    default:
      return null;
  }
};

export const getPestName = (pestName) => {
  switch (pestName) {
    case "himalayanTahr":
      return "Himalayan Tahr";
    case "feralGoat":
      return "Feral Goat";
    case "stoat":
      return "Stoat";
    default:
      return null;
  }
};
