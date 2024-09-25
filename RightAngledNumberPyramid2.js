//Right-Angled Number Pyramid - II

const RightAngledNumberPyramid2 = (num) => {
  for (let i = 1; i <= num; i++) {
    let numStr = "";
    for (let j = 1; j <= i; j++) {
      numStr += i;
    }
    console.log(numStr);
  }
};

RightAngledNumberPyramid2(5);
