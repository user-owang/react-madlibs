function addCommas(num) {
  let string = `${Math.abs(num)}`;
  let neg = num<0;

  function convert(intStr){
    if (intStr.length <4){
      return intStr;
    } else{
      let stack = intStr.split('');
      let answer = [];
      let numCommas = 0;
      while (stack.length){
        if(answer.length && (answer.length - numCommas) % 3 ===0){
          answer.push(',');
          numCommas += 1;
        } else{
          let current = stack.pop();
          answer.push(current);
        }
      }
      return answer.reverse().join("")
    }
  }
  if (string.includes('.')){
    let idx = string.indexOf('.');
    let int = string.substring(0, idx);
    let deci = string.slice(idx);
    int = convert(int);
    return neg ? `-${int}${deci}` : `${int}${deci}`
  } else {
    return neg ? `-${convert(string)}` : convert(string);
  }
}

module.exports = addCommas;