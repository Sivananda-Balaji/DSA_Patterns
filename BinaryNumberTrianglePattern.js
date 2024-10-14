//Binary Number Triangle Pattern

const BinaryNumberTrianglePattern = (num) => {
  for (let i = 1; i <= num; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      if (str[0] === "1") {
        str = "0" + str;
      } else {
        str = "1" + str;
      }
    }

    console.log(str);
  }
};

const num = 5;

BinaryNumberTrianglePattern(num);
