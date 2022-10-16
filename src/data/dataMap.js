export const dataMap = (pestName) => {
  switch (pestName) {
    case "himalayanTahr":
      return {
        url: "https://0qy.github.io/data/himalayanTahr",
        split: 1,
      };
    case "feralGoat":
      return {
        url: "https://0qy.github.io/data/feralGoat",
        split: 1,
      };
    case "redDeer":
      return {
        url: "https://0qy.github.io/data/redDeer",
        split: 1,
      };
    case "stoat":
      return {
        url: "https://0qy.github.io/data/stoat",
        split: 36,
      };
    case "possom":
      return {
        url: "https://0qy.github.io/data/possom",
        split: 16,
      };
    case "rabbit":
      return {
        url: "https://0qy.github.io/data/rabbit",
        split: 36,
      };
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
