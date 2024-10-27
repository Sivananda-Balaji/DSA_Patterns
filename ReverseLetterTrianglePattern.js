//Reverse Letter Triangle Pattern

const ReverseLetterTrianglePattern = (num) => {
  for (let i = num; i > 0; i--) {
    let str = "A";
    for (let j = 1; j < i; j++) {
      str += String.fromCharCode(str.charCodeAt(0) + j);
    }
    console.log(str);
  }
};

ReverseLetterTrianglePattern(5);
