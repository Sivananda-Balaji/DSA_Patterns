//Alpha-Ramp Pattern

const AlphaRampPattern = (num) => {
  let alpha = "A";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < i; j++) {
      alpha += String.fromCharCode(alpha.charCodeAt(0));
    }
    console.log(alpha);
    alpha = String.fromCharCode(alpha.charCodeAt(0) + 1);
  }
};

AlphaRampPattern(5);
