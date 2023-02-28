const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Entrez un nombre : ', (number) => {
  if (isPalindrome(number)) {
    console.log(`${number} est un palindrome !`);
  } else {
    console.log(`${number} n'est pas un palindrome.`);
  }
  rl.close();
});

function isPalindrome(str) {
  const reversedStr = str.toString().split('').reverse().join('');
  return str.toString() === reversedStr;
}