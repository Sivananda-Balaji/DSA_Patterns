//Inverted Star Pyramid

const InvertedStarPyramid = (num) => {
  for (let i = 0; i < num; i++) {
    let pattern = "";
    for (let j = 0; j < i; j++) {
      pattern += " ";
    }
    for (let j = 0; j < 2 * num - (2 * i + 1); j++) {
      pattern += "*";
    }
    for (let j = 0; j < i; j++) {
      pattern += " ";
    }
    console.log(pattern);
  }
};

InvertedStarPyramid(5);

console.log("-----------------");

//Inverted Star Pattern

const invertedStarPattern = (num) => {
  for (let i = 1; i <= num; i++) {
    let pattern = "";
    for (let j = 1; j < i; j++) {
      pattern += " ";
    }
    for (let j = 1; j <= 2 * num - (2 * i - 1); j++) {
      pattern += "*";
    }

    console.log(pattern);
  }
};

invertedStarPattern(5);

console.log("---------------");
