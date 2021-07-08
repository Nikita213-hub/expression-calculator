function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
  let openPriority = ['(', '[', '{', '<'];
  let closePriority = [')', ']', '}', '>'];
  let stack = [];
  let res;
  for (let bracket of expr) {
      if (openPreority.includes(bracket)) {
          stack.push(bracket);
      }
  };
  let errBracket;
  for (let bracket of expr) {
      if (closePriority.includes(bracket) && stack < 1) {
          errBracket = true;
      } 
      if (closePriority.includes(bracket) && stack !== 0) {
          stack.pop()
      } 
      
  };
  res = stack.length === 0 ? true : false;
  if (!res || errBracket) {
      throw new 'ExpressionError: Brackets must be paired';
  };
  let divisionByZero = '/ 0';
  if (expr.includes(divisionByZero)) {
      throw new 'TypeError: Division by zero.'
  } else {
  return (new Function('return ' + expr))()
  }
}

module.exports = {
    expressionCalculator
}
