//Increasing Letter Triangle Pattern

const IncreasingLetterTrianglePattern = (num) => {
  for (let i = 1; i <= num; i++) {
    let str = "A";
    for (let j = 1; j < i; j++) {
      str += String.fromCharCode(str.charCodeAt(0) + j);
    }
    console.log(str);
  }
};

IncreasingLetterTrianglePattern(5);
