//The Number Pattern

const TheNumberPattern = (num) => {
  for (let i = 0; i < 2 * num - 1; i++) {
    let pattern = "";
    for (let j = 0; j < 2 * num - 1; j++) {
      const left = i;
      const top = j;
      const right = 2 * num - 2 - i;
      const bottom = 2 * num - 2 - j;
      pattern += num - Math.min(left, top, right, bottom);
    }
    console.log(pattern);
  }
};

const num = 3;

TheNumberPattern(num);
