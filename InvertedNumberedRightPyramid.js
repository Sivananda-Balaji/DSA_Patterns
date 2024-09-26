//Inverted Numbered Right Pyramid

const InvertedNumberedRightPyramid = (num) => {
  for (let i = num; i > 0; i--) {
    let numStr = "";
    for (let j = 1; j <= i; j++) {
      numStr += j;
    }
    console.log(numStr);
  }
};

InvertedNumberedRightPyramid(5);
