//Diamond Star Pattern

const DiamondStarPattern = (num) => {
  for (let i = 0; i < num; i++) {
    let str = "";
    for (let j = 0; j < num - i - 1; j++) {
      str += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      str += "*";
    }
    console.log(str);
  }
  for (let i = 0; i < num; i++) {
    let str = "";
    for (let j = 0; j < i; j++) {
      str += " ";
    }
    for (let j = 0; j < 2 * num - (2 * i + 1); j++) {
      str += "*";
    }
    console.log(str);
  }
};

DiamondStarPattern(5);
