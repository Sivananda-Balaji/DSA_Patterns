//Increasing Number Triangle Pattern

const IncreasingNumberTrianglePattern = (num) => {
  let answer = 1;
  for (let i = 0; i < num; i++) {
    let pattern = "";
    for (let j = 0; j <= i; j++) {
      pattern += answer + " ";
      answer++;
    }
    console.log(pattern);
  }
};

IncreasingNumberTrianglePattern(5);
