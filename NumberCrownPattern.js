//Number Crown Pattern

const NumberCrownPattern = (num) => {
  let space = 2 * (num - 1);
  for (let i = 1; i <= num; i++) {
    let answer = "";
    for (let j = 1; j <= i; j++) {
      answer += j;
    }
    for (let j = 1; j <= space; j++) {
      answer += " ";
    }
    for (let j = i; j >= 1; j--) {
      answer += j;
    }
    space -= 2;
    console.log(answer);
  }
};

NumberCrownPattern(5);
