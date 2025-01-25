//Alpha-Triangle Pattern

const AlphaTrianglePattern = (num) => {
  let alpha = "A";
  alpha = String.fromCharCode(alpha.charCodeAt(0) + num - 1);
  for (let i = 1; i <= num; i++) {
    let pattern = "";
    let temp = alpha;
    for (let k = 1; k < i; k++) {
      const next = String.fromCharCode(temp.charCodeAt(0) - 1);
      temp = next + temp;
    }
    pattern += temp;
    console.log(pattern);
  }
};

const num = 5;

AlphaTrianglePattern(num);
