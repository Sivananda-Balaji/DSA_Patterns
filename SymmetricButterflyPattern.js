//Symmetric-Butterfly Pattern

const SymmetricButterflyPattern = (num) => {
  for (let i = 1; i < num * 2; i++) {
    let pattern = "";
    for (let j = 0; i < num ? j < i : j < num * 2 - i; j++) {
      pattern += "*";
    }
    const willOccupy = pattern.length * 2;
    for (let k = 0; k < num * 2 - willOccupy; k++) {
      pattern += " ";
    }
    for (let l = 0; i < num ? l < i : l < num * 2 - i; l++) {
      pattern += "*";
    }
    console.log(pattern);
  }
};

const num = 5;

SymmetricButterflyPattern(num);
