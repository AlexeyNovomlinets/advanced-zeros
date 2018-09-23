module.exports = function getZerosCount(number, base) {
  // your implementation
  var currentCount = 0,
      k = 1;

  var simpNum = [],
      degrees = [],
      countZeros = [],
      flag = false,
      d = 2;

  var minZeros = 0;
  var swap = 0;

  function zerosCount(num, p) {
    if ((num/(Math.pow(p, k))) >= 1) {
      currentCount = Math.floor(num/(Math.pow(p, k)));
      k++;
      return (currentCount + zerosCount(num, p));
    }
    else return 0;
  }

  while (base > 1) {
    flag = false;
    while (base % d == 0) {
      base /= d;
      if (!flag) {
        simpNum[simpNum.length] = d;
        degrees[degrees.length] = 1;
        flag = true;
      } else degrees[degrees.length - 1]++;
    }
    if (d == 2) d++;
    else d += 2;
  }

  for (var i = 0; i < simpNum.length; i++) {
    currentCount = 0;
    k = 1;
    countZeros[countZeros.length] = zerosCount(number, simpNum[i]) / degrees[i];
  }

  minZeros = countZeros[0];
  for (var i = 1; i < countZeros.length; i++) {
    if (countZeros[i] <= minZeros) {
      swap = minZeros;
      minZeros = countZeros[i];
      countZeros[i] = minZeros;
    }
  }

  return Math.floor(minZeros);
}