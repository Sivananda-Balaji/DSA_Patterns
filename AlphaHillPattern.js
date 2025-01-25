//Alpha-Hill Pattern

const AlphaHillPattern = (num) => {
  for (let i = 1; i <= num; i++) {
    let pattern = "";
    let alpha = "A";
    for (let j = 1; j <= num - i; j++) {
      pattern += " ";
    }
    for (let k = 1; k < i * 2 - 1; k++) {
      if (k < i) {
        alpha += String.fromCharCode(alpha.charCodeAt(0) + k);
      } else {
        alpha += String.fromCharCode(alpha.charCodeAt(alpha.length - 1) - 1);
      }
    }
    pattern += alpha;
    for (let l = 1; l <= num - i; l++) {
      pattern += " ";
    }
    console.log(pattern);
  }
};

const num = 4;

AlphaHillPattern(num);
