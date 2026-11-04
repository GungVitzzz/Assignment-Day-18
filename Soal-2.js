const input = [2, 14, 25, 33, 62, 8, 32, 15, 21, 67];

function getOddAndEvenNumber(...params) {
  const normalizedParams = params.flat();

  return {
    evenNumberArray: normalizedParams.filter((num) => num % 2 === 0),
    oddNumberArray: normalizedParams.filter((num) => num % 2 !== 0)
  };
}

console.log(getOddAndEvenNumber(input));
