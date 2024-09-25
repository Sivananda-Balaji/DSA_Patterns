//Right-Angled Number Pyramid

const RightAngledNumberPyramid = (num) => {
  for (let i = 1; i <= num; i++) {
    let numStr = "";
    for (let j = 1; j <= i; j++) {
      numStr += j;
    }
    console.log(numStr);
  }
};

RightAngledNumberPyramid(5);
