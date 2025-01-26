//Symmetric-Void Pattern

const SymmetricVoidPattern = (num) => {
  for (let i = 0; i < 2 * num; i++) {
    let pattern = "";
    for (let j = 0; i < num ? j < num - i : j <= i - num; j++) {
      pattern += "*";
    }
    const willOccupy = pattern.length * 2;
    for (let k = 0; i < num ? k < i * 2 : k < 2 * num - willOccupy; k++) {
      pattern += " ";
    }
    for (l = 0; i < num ? l < num - i : l <= i - num; l++) {
      pattern += "*";
    }
    console.log(pattern);
  }
};

const num = 5;

SymmetricVoidPattern(num);
