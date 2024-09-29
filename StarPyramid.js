//Star Pyramid

const StarPyramid = (num) => {
  for (let i = 0; i < num; i++) {
    let pattern = "";
    for (let j = 0; j < num - i - 1; j++) {
      pattern += " ";
    }
    for (let j = 0; j < i * 2 + 1; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
};

StarPyramid(5);

console.log("---------------");

//star pattern using different index

const starPattern = (num) => {
  for (let i = 1; i <= num; i++) {
    let pattern = "";
    for (let j = 0; j < num - i; j++) {
      pattern += " ";
    }
    for (let j = 0; j < i * 2 - 1; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
};

starPattern(5);
