// Check if two string are anagrams
// 1. Using CharMap
console.log(anagram('madam', 'madamm'))

// function anagram(str1, str2) {
//   const charObj1 = buildCharMap(str1)
//   const charObj2 = buildCharMap(str2)

//   if (Object.keys(charObj1).length !== Object.keys(charObj2).length) return false

//   for (const key in charObj1) {
//     if (charObj1[key] !== charObj2[key]) return false
//   }

//   return true
// }

// function buildCharMap(string) {
//   const charMap = {}
//   let cleanString = string.replace(/\W/g, '').toLowerCase()
//   for (const char of cleanString) {
//     charMap[char] = charMap[char] + 1 || 1
//   }

//   return charMap
// }

// 2. Using Clean string method

function anagram(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB)
}

function cleanString(string) {
  return string.replace(/\W/g, '').toLowerCase().split().sort().join()
}
