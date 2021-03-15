module.exports = function toReadable(number) {
  const words = [
    ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  ];

  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let numberString = `${number}`;
  let rank = numberString.length - 1;
  let result = '';

  if (+numberString > 9 && +numberString < 20) {
    return teens[+numberString % 10];
  } else if (+numberString > 19 || +numberString > 0 && +numberString < 10) {
    while (numberString.length > 0 && +numberString > 0) {
      const digit = +numberString.slice(0, 1);
      if (+numberString < 20 && +numberString > 9) {
        result = `${result} ${teens[+numberString % 10]}`;
        numberString = '';
      } else {
        result = `${result} ` + words[rank % 2][digit % 10] + (rank === 2 ? ' hundred' : '');
        numberString = numberString.slice(1);
        rank--;
      }
    }
  } else if (+numberString === 0) {
    return words[rank][+numberString];
  }

  return result.replace('  ', ' ').trim();
}