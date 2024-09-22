// Rectangular Star Pattern

const RectangularStarPattern = (num) => {
  for (let i = 0; i < num; i++) {
    let str = "";
    for (let j = 0; j < num; j++) {
      str += "*";
    }
    console.log(str);
  }
};

RectangularStarPattern(5);
