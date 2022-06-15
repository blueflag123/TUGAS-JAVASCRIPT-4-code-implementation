let checkPalindrome = (string) => {
    const nilai = string.split('').reverse().join('');
    if(nilai === string) {
        console.log(`${string} adalah palindrome`)
    } else {
        console.log(`${string} bukan palindrome` )
    }
  }

checkPalindrome("malam");


