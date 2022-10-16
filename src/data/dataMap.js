import * as feralGoat from "../data/feralGoat2014.json";
import * as himalayanTahr from "../data/himalayanTahr2014.json";

export const dataMap = (pestName) => {
  switch (pestName) {
    case "himalayanTahr":
      return himalayanTahr;
    case "feralGoat":
      return feralGoat;
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
    default:
      return null;
  }
};
