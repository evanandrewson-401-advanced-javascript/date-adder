const dateAdder = (date, diff) => {
  const number = diff.slice(0, diff.length - 1);
  const operator = diff.slice(diff.length - 1, diff.length);
  let multiplier;
  if (operator === 's') {
    multiplier = 1000
  } else if(operator === 'm') {
    multiplier = 1000 * 60
  } else if(operator === 'h') {
    multiplier = 1000 * 60 * 60
  } else if(operator === 'd') {
    multiplier = 1000 * 60 * 60 * 24
  } else if(operator === 'w') {
    multiplier = 1000 * 60 * 60 * 24 * 7
  } else if(operator === 'M') {
    multiplier = 1000 * 60 * 60 * 24 * 7 * 30.44
  } else if(operator === 'y') {
    multiplier = 1000 * 60 * 60 * 24 * 7 * 30.44 * 12
  }
  console.log(multiplier)
  return (date + parseInt(number) * multiplier);
}

module.exports = dateAdder;