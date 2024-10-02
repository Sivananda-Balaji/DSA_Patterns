//Half Diamond Star Pattern

const HalfDiamondStarPattern = (num) => {
  for (let i = 0; i < 2 * num - 1; i++) {
    let str = "";
    for (let j = 0; j <= i && i < num; j++) {
      str += "*";
    }
    for (let j = i; j < 2 * num - 1 && i >= num; j++) {
      str += "*";
    }
    console.log(str);
  }
};

HalfDiamondStarPattern(5);
