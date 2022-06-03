// Write your code below


function checkPalindrom (str) {
    return str == str.split('').reverse().join('');
  }

  if(checkPalindrom('Abba')) {
      console.log('Palindrome');
  } else {
      console.log('Not Palindrome');
  }


