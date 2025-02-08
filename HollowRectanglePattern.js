//Hollow Rectangle Pattern

const HollowRectanglePattern = (num) => {
  for (let i = 1; i <= num; i++) {
    let pattern = "";
    for (let j = 1; i === 1 || i === num ? j <= num : j <= 1; j++) {
      pattern += "*";
    }
    if (i !== 1 && i !== num) {
      const willOccupy = num - pattern.length * 2;
      for (let k = 1; k <= willOccupy; k++) {
        pattern += " ";
      }
      pattern += "*";
    }
    console.log(pattern);
  }
};

const num = 5;

HollowRectanglePattern(num);
