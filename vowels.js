// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let matches = str.match(/[aeiou]/gi)
  console.log(matches)
  return matches ? matches.length : 0
}
console.log(vowels('this is the astringou'))
