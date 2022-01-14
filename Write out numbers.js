// Create a function that transforms any positive number to a string representing the number in words.
//  The function should work for all numbers between 0 and 999999.

// Examples
// number2words(0)  ==>  "zero"
// number2words(1)  ==>  "one"
// number2words(9)  ==>  "nine"
// number2words(10)  ==>  "ten"
// number2words(17)  ==>  "seventeen"
// number2words(20)  ==>  "twenty"
// number2words(21)  ==>  "twenty-one"
// number2words(45)  ==>  "forty-five"
// number2words(80)  ==>  "eighty"
// number2words(99)  ==>  "ninety-nine"
// number2words(100)  ==>  "one hundred"
// number2words(301)  ==>  "three hundred one"
// number2words(799)  ==>  "seven hundred ninety-nine"
// number2words(800)  ==>  "eight hundred"
// number2words(950)  ==>  "nine hundred fifty"
// number2words(1000)  ==>  "one thousand"
// number2words(1002)  ==>  "one thousand two"
// number2words(3051)  ==>  "three thousand fifty-one"
// number2words(7200)  ==>  "seven thousand two hundred"
// number2words(7219)  ==>  "seven thousand two hundred nineteen"
// number2words(8330)  ==>  "eight thousand three hundred thirty"
// number2words(99999)  ==>  "ninety-nine thousand nine hundred ninety-nine"
// number2words(888888)  ==>  "eight hundred eighty-eight thousand eight hun
function number2words(n) {
  const words = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    
  };

  // n =>0=> twenty
  return n <= 20
    ? words[n]
    : // n=> 20 => 99
    n > 20 && n < 100 && n % 10 === 0
    ? words[n]
    : n > 20 && n < 100 && n % 10 !== 0
    ? words[Math.floor(n / 10) * 10] + '-' + words[n % 10]
    : // n< 999
    n < 999 && (n / 100) % 1 === 0
    ? `${words[n / 100]} hundred`
    : n < 999 && (n / 100) % 1 !== 0
    ? `${words[Math.floor(n / 100)]} hundred ${number2words(n % 100)}`
    : //  // >=1000
    n < 999999 && (n / 1000) % 1 === 0
    ? `${number2words(Math.floor(n / 1000))} thousand`
    : n < 999999 &&
      (n / 1000) % 1 !== 0 &&
      `${[number2words(Math.floor(n / 1000))]} thousand ${number2words(
        n % 1000
      )}`;
}
