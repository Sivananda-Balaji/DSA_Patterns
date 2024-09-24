//Right-Angled Triangle Pattern

const RightAngledTrianglePattern = (num) => {
  for (let i = 0; i < num; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
};

RightAngledTrianglePattern(5);
